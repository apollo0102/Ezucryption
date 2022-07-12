import {
  BadRequestException,
  forwardRef,
  Inject,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { User } from './users.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Like, Repository } from 'typeorm';
import { MailersService } from 'src/mailers/mailers.service';
import { randomBytes, scrypt as _scrypt } from 'crypto';
import { GetAllUsersDto, UserPasswordParamsDto } from './dto/user-params.dto';
import { promisify } from 'util';
import { UserNotificationSettings } from '../user-notification-settings/entities/user-notification-setting.entity';
import { RoleService } from 'src/role/role.service';

const scrypt = promisify(_scrypt);

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,

    @InjectRepository(UserNotificationSettings)
    private userNotifiationsRepo: Repository<UserNotificationSettings>,

    private mailersService: MailersService,
  ) {}

  findAll() {
    return this.userRepository.find();
  }

  // Will be used to go for extensive searching and sorting
  find(query: any) {
    // console.log("Email in user service: ", search.email)
    // if(email)
    //     return this.userRepository.find( { email: email } );
    // else
    //     return this.userRepository.find();
  }

  async findByEmail(email: string) {
    if (!email) throw new NotFoundException('user not found');
    const user = await this.userRepository.find({ email: email });
    if (!user) {
      throw new NotFoundException('user not found');
    }
    return user;
  }

  async findOneByEmail(email: string) {
    if (!email) throw new NotFoundException('user not found');
    const user = await this.userRepository.findOne({ email: email });
    if (!user) {
      throw new NotFoundException('user not found');
    }
    return user;
  }

  async findByVerificationKey(key: string) {
    if (!key) throw new NotFoundException('Invalid Key');
    const user = await this.userRepository.find({ verificationCode: key });
    if (!user) {
      throw new NotFoundException('Invalid Key');
    }
    return user;
  }

  async getAllUsers(params: GetAllUsersDto, userId: string) {
    const { skip, take, search, order } = params;

    const users = await this.userRepository.findAndCount({
      where: {
        firstName: Like(`%${search}%`),
        lastName: Like(`%${search}%`),
      },
      take,
      skip: skip * take,
      order: {
        ['id']: order === 'DESC' ? 'DESC' : 'ASC',
      },
    });

    return users;
  }

  async findOne(id: string) {
    if (!id) throw new NotFoundException('user not found');
    const user = await this.userRepository.findOne({
      relations: ['members'],
      where: {
        id: id,
      },
    });
    console.log(user);
    if (!user) {
      throw new NotFoundException('user not found');
    }
    return user;
  }

  async create(params: Partial<User>) {
    const user = await this.userRepository.create();
    Object.assign(user, params);
    await this.userRepository.save(user);
    // Sending verification Email in backgroung (Don't use await)

    const notifications_settings = await this.userNotifiationsRepo.create();

    notifications_settings.userId = user;

    await this.userNotifiationsRepo.save(notifications_settings);

    if (user && !user.userVerification) this.privateSendVerificationEmail(user);
    return user;
  }

  async invite(params: Partial<User>, userId: string) {
    const users = await this.findByEmail(params.email);
    if (users.length > 0) throw new NotFoundException('Email already exist');
    Object.assign(params, { password: 'password', invitedBy: userId });
    await this.create(params);
    return 'User invited succesfully';
  }

  async update(id: string, params: Partial<User>) {
    if (!id) throw new NotFoundException('user not found');
    const user = await this.userRepository.findOne(id);
    if (!user) {
      throw new NotFoundException('user not found');
    }
    Object.assign(user, params);
    return this.userRepository.save(user);
  }

  async changePassword(id: string, params: UserPasswordParamsDto) {
    if (params.newPassword != params.confirmPassword)
      throw new BadRequestException("New Password doesn't match");
    const newUser = await this.userRepository.findOne(id);
    if (newUser.password != params.currentPassword)
      throw new BadRequestException("Current Password doesn't match");

    // Hash the users password
    // 1. Generate a salt
    // 2. Hash the salt and password together
    // 3. Join the hashed result and salt together
    // ********** Un-comment the below 3 lines when password needs to be encrypted ***********
    const salt = randomBytes(8).toString('hex');
    const encryptedPassword = await this.privateGetEncryptedPassword(
      salt,
      params.newPassword,
    );

    // Create a new user and save it (Uncomment the below line when implementing encrypted password)
    // Object.assign(newUser, { password: encryptedPassword })
    Object.assign(newUser, { password: params.newPassword });
    return this.userRepository.save(newUser);
  }

  async remove(id: string) {
    const user = await this.userRepository.findOne(id);
    if (!user) {
      throw new NotFoundException('user not found');
    }
    Object.assign(user, { isActive: false, deletedAt: new Date() });
    return this.userRepository.save(user);
  }

  async findByEmailAndSendEmailVerification(email: string) {
    const [user] = await this.userRepository.find({ email: email });
    if (!user) throw new NotFoundException('user not found');
    // Check if user is already verified
    if (user.userVerification)
      throw new BadRequestException('user already verified');
    // Don't await and allow sending mail in background
    this.privateSendVerificationEmail(user);
    return user;
  }

  async findByEmailAndSendForgotPasswordEmail(email: string) {
    const [user] = await this.userRepository.find({ email: email });
    if (!user) throw new NotFoundException('user not found');
    // Don't await and allow sending mail in background
    const params = { forgotPasswordCode: randomBytes(32).toString('hex') };
    Object.assign(user, params);
    await this.userRepository.save(user);
    this.privateSendForgotPasswordEmail(user);
    return user;
  }

  async findByEmailAndSendOtpEmail(email: string) {
    const [user] = await this.userRepository.find({ email: email });
    if (!user) throw new NotFoundException('user not found');
    // Don't await and allow sending mail in background
    const params = {
      loginOtpCode: Math.floor(1000 + Math.random() * 9000).toString(),
    };
    Object.assign(user, params);
    await this.userRepository.save(user);
    this.privateOtpLoginEmail(user, params.loginOtpCode);
    return user;
  }

  checkUser(payloadUserId: string, userId: string) {
    if (payloadUserId != userId)
      throw new UnauthorizedException('Not Authorized');
  }

  async privateSendVerificationEmail(user: User) {
    console.log(user);
    console.log('Sending verification email');
    // Send OTP on email for login
    const link = `${process.env.FRONTEND_URL}/verify?id=${user.id}&code=${user.verificationEmailCode}`;
    const mailerData = {
      email: user.email,
      subject: 'Email Verification',
      text: `Click the link to verify your email at ${link}`,
      html: `<p> Click the link to verify your email at ${link} </p>`,
    };
    console.log('Mailer Data: ', mailerData);
    await this.mailersService.data(mailerData, link);

    return 1;
  }

  async privateSendForgotPasswordEmail(user: User) {
    console.log('Sending Forgot email');
    // Send OTP on email for login
    const link = `${process.env.FRONTEND_URL}/reset-password?id=${user.id}&code=${user.forgotPasswordCode}`;
    const mailerData = {
      email: user.email,
      subject: 'Password Reset',
      text: `Click the link to reset your password at ${link}`,
      html: `<p> Click the link to reset your password ${link} </p>`,
    };
    console.log(mailerData);
    this.mailersService.data(mailerData, link);
    return 1;
  }

  async privateOtpLoginEmail(user: User, otp: string) {
    console.log('Sending login email');
    // Send OTP on email for login
    const mailerData = {
      email: user.email,
      subject: 'OTP Login',
      text: `You OTP IS ${otp}`,
      html: `<p> You OTP IS ${otp} </p>`,
    };
    // this.mailersService.data(mailerData, link);
    console.log(otp, ' THIS IS LOGIN OTP');
    return 1;
  }

  async privateGetEncryptedPassword(salt, password) {
    const hash = (await scrypt(password, salt, 32)) as Buffer;
    return salt + '.' + hash.toString('hex');
  }
}
