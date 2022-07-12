import { promisify } from 'util';
import {
  BadRequestException,
  Inject,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { randomBytes, scrypt as _scrypt } from 'crypto';
import { JwtService } from '@nestjs/jwt';
import { MailersService } from 'src/mailers/mailers.service';
import { UsersService } from 'src/users/users.service';
import { AuthResponseDto } from './dataTransferObject/jsonBuilder/authResponse.dto';
import { UserNotificationSettings } from 'src/user-notification-settings/entities/user-notification-setting.entity';
import { VerifyUserDto } from './dataTransferObject/strongParams/authentication.dto';

const scrypt = promisify(_scrypt);

@Injectable()
export class AuthenticationService {
  constructor(
    private usersService: UsersService,
    private mailersService: MailersService,
    private jwtTokenService: JwtService,
  ) {}

  async register(email: string, password: string) {
    const users = await this.usersService.findByEmail(email);
    if (users.length) {
      throw new BadRequestException('Email already taken.');
    }
    const salt = randomBytes(8).toString('hex');
    const encryptedPassword = await this.privateGetEncryptedPassword(
      salt,
      password,
    );
    const user = await this.usersService.create({
      email: email,
      password: encryptedPassword,
    });
    const jwtToken = {
      jwtToken: this.jwtTokenService.sign({
        userId: user.id,
        email: user.email,
      }),
    };
    return Object.assign({}, user, jwtToken);
  }

  async login(email: string, password: string): Promise<AuthResponseDto> {
    // Find the user
    const [user] = await this.usersService.findByEmail(email);
    if (!user) throw new NotFoundException('email doesn not exist');

    const { password: userPassword, ...userData } = user;

    const [salt, storedHash] = userPassword.split('.');
    const hash = (await scrypt(password, salt, 32)) as Buffer;
    if (storedHash !== hash.toString('hex'))
      throw new BadRequestException('invalid credentials');
    const jwtToken = {
      jwtToken: this.jwtTokenService.sign({
        userId: user.id,
        email: user.email,
      }),
    };
    return Object.assign({}, userData, jwtToken);
  }

  async loginWithOtp(email: string) {
    const [user] = await this.usersService.findByEmail(email);
    if (!user) throw new NotFoundException('email doesn not exist');

    // Generate a four digit OTP
    const otp = Math.floor(1000 + Math.random() * 9000);

    // Send OTP on email for login
    const mailerData = {
      email: user.email,
      subject: 'OTP for login',
      text: `OTP to login is ${otp}`,
      html: `<p>OTP to login is ${otp}</p>`,
    };
    await this.mailersService.data(mailerData);

    return { user: user, otp: otp };
  }

  async getTokenByVerificationKey(key: string): Promise<AuthResponseDto> {
    const [user] = await this.usersService.findByVerificationKey(key);
    if (!user) throw new NotFoundException('Invalid Key');

    const jwtToken = {
      jwtToken: this.jwtTokenService.sign({
        userId: user.id,
        email: user.email,
      }),
    };
    return Object.assign({}, user, jwtToken);
  }

  async verifyUser(userid: string, data: VerifyUserDto) {
    const user = await this.usersService.update(userid, {
      verified: true,
      userDocument: data.userDocument,
      verificationType: data.verificationType,
    });

    return user;
  }
  async verifyOtp(id: string) {
    const user = await this.usersService.findOne(id);
    if (!user) throw new NotFoundException('user not found');

    const jwtToken = {
      jwtToken: this.jwtTokenService.sign({
        userId: user.id,
        email: user.email,
      }),
    };
    return Object.assign({}, user, jwtToken);
  }

  async resendVerificationEmail(email: string) {
    return this.usersService.findByEmailAndSendEmailVerification(email);
  }

  async verifiedEmail(id: string, code: string) {
    const user = await this.usersService.findOne(id);
    if (!user) throw new NotFoundException('user not found');
    if (user.userVerification)
      throw new BadRequestException('user already verified');
    if (code !== user.verificationEmailCode)
      throw new BadRequestException('invalid verification code');
    await this.usersService.update(user.id, {
      userVerification: true,
      userVerificationApprovalDate: new Date(),
    });
    return user;
  }

  async forgotPassword(email: string) {
    return this.usersService.findByEmailAndSendForgotPasswordEmail(email);
  }

  async otpLogin(email: string) {
    return this.usersService.findByEmailAndSendOtpEmail(email);
  }

  async resetPassword(id: string, code: string, password: string) {
    const user = await this.usersService.findOne(id);
    if (!user) throw new NotFoundException('user not found');
    // Compare forgot password code
    if (code !== user.forgotPasswordCode)
      throw new BadRequestException('Invalid reset code');

    const salt = randomBytes(8).toString('hex');
    const encryptedPassword = await this.privateGetEncryptedPassword(
      salt,
      password,
    );
    await this.usersService.update(user.id, {
      password: encryptedPassword,
      forgotPasswordCode: null,
    });
    return user;
  }

  async verifyLoginOtp(email: string, code: string) {
    const user = await this.usersService.findByEmail(email);
    if (!user) throw new NotFoundException('user not found');
    // Compare forgot password code
    if (code !== user[0].loginOtpCode)
      throw new BadRequestException('Invalid reset code');

    await this.usersService.update(user[0].id, {
      loginOtpCode: null,
    });
    const jwtToken = {
      jwtToken: this.jwtTokenService.sign({
        userId: user[0].id,
        email: user[0].email,
      }),
    };
    return Object.assign({}, user[0], jwtToken);
  }

  async googleLogin(req) {
    if (!req.user) throw new BadRequestException('No user from google');
    // Check if user exist in the system
    let user;
    const [users] = await this.usersService.findByEmail(req.user.email);
    // Create user if not exist in the system
    if (!users) {
      const params = {
        firstName: req.user.firstName,
        lastName: req.user.lastName,
        email: req.user.email,
        userVerification: true,
        userVerificationApprovalDate: new Date(),
        password: 'googleLogin',
      };
      user = await this.usersService.create(params);
    } else {
      user = users;
      // Updating Google data if it's empty
      if (Object.keys(user.google).length == 0) {
        const params = {
          google: req.user.google,
        };
        user = await this.usersService.update(user.id, params);
      }
    }
    const jwtToken = {
      jwtToken: this.jwtTokenService.sign({
        userId: user.id,
        email: user.email,
      }),
    };
    return Object.assign({}, user, jwtToken);
  }

  async twitterLogin(req) {
    if (!req.user) throw new BadRequestException('No user from twitter');
    // Check if user exist in the system
    let user;
    const [users] = await this.usersService.findByEmail(req.user.email);
    // Create user if not exist in the system
    if (!users) {
      const params = {
        firstName: req.user.firstName,
        lastName: req.user.lastName,
        email: req.user.email,
        userVerification: true,
        userVerificationApprovalDate: new Date(),
        password: 'twitterLogin',
      };
      user = await this.usersService.create(params);
    } else {
      user = users;
      // Updating Twitter data if it's empty
      if (Object.keys(user.twitter).length == 0) {
        const params = {
          twitter: req.user.twitter,
        };
        user = await this.usersService.update(user.id, params);
      }
    }
    const jwtToken = {
      jwtToken: this.jwtTokenService.sign({
        userId: user.id,
        email: user.email,
      }),
    };
    return Object.assign({}, user, jwtToken);
  }

  async instagramLogin(req) {
    return req.user;
    // if(!req.user)
    //   throw new BadRequestException('No user from instagram')
    // // Check if user exist in the system
    // let user
    // const [users] = await this.usersService.findByEmail(req.user.email)
    // // Create user if not exist in the system
    // if(!users){
    //   const params = {
    //     firstName: req.user.firstName,
    //     lastName: req.user.lastName,
    //     email: req.user.email,
    //     userVerification: true,
    //     userVerificationApprovalDate: new Date(),
    //     password: 'instagramLogin'
    //   }
    //   user = await this.usersService.create(params)
    // } else
    //   user = users
    // return user
  }

  async facebookLogin(req) {
    if (!req.user) throw new BadRequestException('No user from facebook');
    // Check if user exist in the system
    let user;
    const [users] = await this.usersService.findByEmail(req.user.email);
    // Create user if not exist in the system
    if (!users) {
      const params = {
        firstName: req.user.firstName,
        lastName: req.user.lastName,
        email: req.user.email,
        userVerification: true,
        userVerificationApprovalDate: new Date(),
        password: 'facebookLogin',
        facebook: req.user.facebook,
      };
      user = await this.usersService.create(params);
    } else {
      user = users;
      // Updating Facebook data if it's empty
      if (Object.keys(user.facebook).length == 0) {
        const params = {
          facebook: req.user.facebook,
        };
        user = await this.usersService.update(user.id, params);
      }
    }
    const jwtToken = {
      jwtToken: this.jwtTokenService.sign({
        userId: user.id,
        email: user.email,
      }),
    };
    return Object.assign({}, user, jwtToken);
  }

  // Private Functions
  async privateGetEncryptedPassword(salt, password) {
    const hash = (await scrypt(password, salt, 32)) as Buffer;
    return salt + '.' + hash.toString('hex');
  }
}
