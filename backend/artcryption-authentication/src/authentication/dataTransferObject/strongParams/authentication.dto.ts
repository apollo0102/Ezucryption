import { ParseIntPipe } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import {
  IsEmail,
  IsEnum,
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsString,
} from 'class-validator';
import { verificationPreference } from 'src/users/users.entity';

export class LoginDto {
  @ApiProperty({ default: 'password' })
  @IsString()
  password: string;

  @ApiProperty({ default: 'test@test.com' })
  @IsEmail({}, { message: 'invalid email format' })
  @IsString()
  email: string;
}

export class EmailDto {
  @ApiProperty({ default: 'navpreet.singh.k@gmail.com' })
  @IsEmail({}, { message: 'invalid email format' })
  @IsString()
  email: string;
}

export class PasswordDto {
  @ApiProperty({ default: 'password' })
  @IsString()
  password: string;
}

export class OtpDto {
  @ApiProperty({ default: 1234 })
  @Transform(({ value }) => parseInt(value))
  @IsInt()
  otp: number;
  @ApiProperty({ default: 'test@test.com' })
  @IsEmail({}, { message: 'invalid email format' })
  @IsString()
  email: string;
}

export class VerifyUserDto {
  @ApiProperty({ default: verificationPreference.browse })
  @IsNotEmpty()
  @IsEnum(verificationPreference)
  verificationType: verificationPreference;

  @ApiProperty({ default: 'base64' })
  @IsNotEmpty()
  @IsString()
  userDocument: string;
}
