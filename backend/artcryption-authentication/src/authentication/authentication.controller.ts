import {
  BadRequestException,
  Body,
  Controller,
  Get,
  HttpCode,
  NotFoundException,
  Param,
  Post,
  Query,
  Req,
  Response,
  Session,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import {
  ApiCreatedResponse,
  ApiOperation,
  ApiParam,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { Response as Res } from 'express';
import { JwtAuthGuard } from 'src/guards/jwt.guard';
import { Serialize } from 'src/interceptors/serializer.interceptor';
import { AuthenticationService } from './authentication.service';
import { AuthResponseDto } from './dataTransferObject/jsonBuilder/authResponse.dto';
import {
  EmailDto,
  LoginDto,
  OtpDto,
  PasswordDto,
  VerifyUserDto,
} from './dataTransferObject/strongParams/authentication.dto';

@Controller(['auth'])
@ApiTags('Authentication')
export class AuthenticationController {
  constructor(private authenticationService: AuthenticationService) {}

  // API (POST `auth/register`)
  @Post('register')
  @Serialize(AuthResponseDto)
  // @ApiParam({
  //   name: 'password',
  //   required: true,
  //   type: String,
  //   description: 'Password'
  // })
  // @ApiParam({
  //   name: 'email',
  //   required: true,
  //   type: String,
  //   description: 'Should be an email with proper format'
  // })
  @ApiResponse({
    status: 201,
    description: 'User created successfully',
    type: AuthResponseDto,
  })
  @ApiResponse({
    status: 400,
    description: 'Email already taken.',
  })
  async register(@Body() params: LoginDto, @Session() session: any) {
    const user = await this.authenticationService.register(
      params.email,
      params.password,
    );
    return user;
  }

  // API (POST `auth/login`)
  @Serialize(AuthResponseDto)
  @Post('login')
  @HttpCode(200)
  @ApiResponse({
    status: 200,
    description: 'User logged successfully after credentials verification',
    type: AuthResponseDto,
  })
  @ApiResponse({
    status: 400,
    description: 'Invalid credentials',
  })
  async login(@Body() params: LoginDto, @Response() res: Res) {
    const user = await this.authenticationService.login(
      params.email,
      params.password,
    );
    return res.json(user);
  }

  // API (POST `auth/login-with-otp`)
  @Post('login-with-otp')
  @HttpCode(200)
  @ApiResponse({
    status: 200,
    description: 'Send OTP for login',
  })
  @ApiResponse({
    status: 404,
    description: 'user not found',
  })
  async loginWithOtp(@Body() params: EmailDto) {
    await this.authenticationService.otpLogin(params.email);
    return { message: 'OTP email send successfully' };
  }

  // API (POST `auth/login-with-otp`)
  @Post('verify-otp')
  @Serialize(AuthResponseDto)
  @HttpCode(200)
  @ApiResponse({
    status: 200,
    description: 'Verifying OTP for login',
    type: AuthResponseDto,
  })
  @ApiResponse({
    status: 404,
    description: 'user not found',
  })
  async verifyOtp(@Body() params: OtpDto, @Session() session: any) {
    return this.authenticationService.verifyLoginOtp(
      params.email,
      params.otp.toString(),
    );
  }

  @Serialize(AuthResponseDto)
  @Get('getTokenByKey/:key')
  @HttpCode(200)
  @ApiResponse({
    status: 200,
    description: 'User logged successfully after Key verification',
    type: AuthResponseDto,
  })
  @ApiResponse({
    status: 400,
    description: 'Invalid Key',
  })
  async getTokenByKey(@Param('key') key: string, @Response() res: Res) {
    const user = await this.authenticationService.getTokenByVerificationKey(
      key,
    );
    return res.json(user);
  }

  @Post('verify-user')
  @Serialize(AuthResponseDto)
  @HttpCode(200)
  @ApiResponse({
    status: 200,
    description: 'Verifying User',
    type: AuthResponseDto,
  })
  @ApiResponse({
    status: 404,
    description: 'user not found',
  })
  @UseGuards(JwtAuthGuard)
  async verifyUser(
    @Body() params: VerifyUserDto,
    @Session() session: any,
    @Req() req: any,
  ) {
    const user = this.authenticationService.verifyUser(req.user.id, params);

    return user;
  }

  // API (GET `auth/signout`)
  @Get('signout')
  @ApiResponse({
    status: 200,
    description: 'user successfully signed out by removing session',
  })
  @ApiResponse({
    status: 400,
    description: 'User already signed out',
  })
  async signOut(@Session() session: any) {
    if (!session.id)
      throw new BadRequestException({ message: 'User already signed out' });
    session.id = null;
    return { message: 'User successfully signed out' };
  }

  // API (POST `auth/resend-verfication-email`)
  @Post('resend-verfication-email')
  @HttpCode(200)
  @ApiResponse({
    status: 200,
    description: 'Verification email send again',
  })
  @ApiResponse({
    status: 404,
    description: 'user not found',
  })
  async resendVerificationEmail(
    @Body() params: EmailDto,
    @Session() session: any,
  ) {
    await this.authenticationService.resendVerificationEmail(params.email);
    return { message: 'Verification email send again' };
  }

  // API (GET `auth/verified-email`)
  @Get('verified-email')
  @ApiResponse({
    status: 200,
    description: 'Email verified successfully',
  })
  @ApiResponse({
    status: 400,
    description: 'user already verified',
  })
  @ApiResponse({
    status: 404,
    description: 'user not found',
  })
  async verifiedEmail(@Query('id') id: string, @Query('code') code: string) {
    await this.authenticationService.verifiedEmail(id, code);
    return { message: 'Email verified successfully' };
  }

  // API (POST `auth/forgot-password`)
  @Post('forgot-password')
  @HttpCode(200)
  @ApiResponse({
    status: 200,
    description: 'Reset Password email send successfully',
  })
  @ApiResponse({
    status: 404,
    description: 'user not found',
  })
  async forgotPassword(@Body() params: EmailDto, @Session() session: any) {
    await this.authenticationService.forgotPassword(params.email);
    return { message: 'Reset Password email send successfully' };
  }

  // API (POST `auth/reset-password`)
  @Post('reset-password')
  @HttpCode(202)
  @ApiResponse({
    status: 200,
    description: 'Password updates successfully',
  })
  @ApiResponse({
    status: 404,
    description: 'user not found',
  })
  @Serialize(AuthResponseDto)
  async resetPassword(
    @Query('id') id: string,
    @Query('code') code: string,
    @Body() params: PasswordDto,
    @Session() session: any,
  ) {
    return this.authenticationService.resetPassword(id, code, params.password);
  }

  @ApiResponse({
    status: 201,
    description: 'Login with Google Auth',
  })
  @ApiResponse({
    status: 400,
    description: 'No user was returned from the google',
  })
  @Get('google/redirect')
  @HttpCode(201)
  @UseGuards(AuthGuard('google'))
  @Serialize(AuthResponseDto)
  async googleAuth(@Req() req) {
    return this.authenticationService.googleLogin(req);
  }

  // Login by Twitter
  @ApiResponse({
    status: 201,
    description: 'Login with Twitter Auth',
  })
  @ApiResponse({
    status: 400,
    description: 'No user was returned from the twitter',
  })
  @Get('twitter/redirect')
  @HttpCode(201)
  @UseGuards(AuthGuard('twitter'))
  @Serialize(AuthResponseDto)
  async twitterAuth(@Req() req) {
    return this.authenticationService.twitterLogin(req);
  }

  // Login by Instagram
  @ApiResponse({
    status: 201,
    description: 'Login with Instagram Auth',
  })
  @ApiResponse({
    status: 400,
    description: 'No user was returned from the instagram',
  })
  @Get('instagram/redirect')
  @HttpCode(201)
  @UseGuards(AuthGuard('instagram'))
  @Serialize(AuthResponseDto)
  async instagramAuth(@Req() req) {
    return 'This functionality NPM package is broken. Fixing the package in progress.';
    // return this.authenticationService.instagramLogin(req)
  }

  // Login by Facebook
  @ApiResponse({
    status: 201,
    description: 'Login with Facebook Auth',
  })
  @ApiResponse({
    status: 400,
    description: 'No user was returned from the facebook',
  })
  @Get('facebook/redirect')
  @HttpCode(201)
  @UseGuards(AuthGuard('facebook'))
  @Serialize(AuthResponseDto)
  async facebookAuth(@Req() req) {
    return this.authenticationService.facebookLogin(req);
  }
}
