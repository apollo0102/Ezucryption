import { Optional } from '@nestjs/common';
import { ApiProperty } from '@nestjsx/crud/lib/crud';
import {
  IsArray,
  IsBoolean,
  IsDate,
  IsDateString,
  IsEmail,
  IsOptional,
  IsString,
  IsUrl,
  IsNotEmpty,
} from 'class-validator';

export class UserInvitationParamsDto {
  @ApiProperty({ default: 'test@test.com' })
  @IsEmail({}, { message: 'invalid email format' })
  @IsString()
  email: string;
}

export class UserParamsDto {
  @ApiProperty({ default: 'first name' })
  @IsString()
  @IsOptional()
  firstName: string;

  @ApiProperty({ default: 'last name' })
  @IsString()
  @IsOptional()
  lastName: string;

  @ApiProperty({ default: 'username' })
  @IsString()
  @IsOptional()
  username: string;

  @ApiProperty({ default: 'website' })
  @IsString()
  @IsOptional()
  website: string;

  @ApiProperty({ default: 'facebook url' })
  @IsString()
  @IsOptional()
  facebookUrl: string;

  @ApiProperty({ default: 'instagram url' })
  @IsString()
  @IsOptional()
  instagramUrl: string;

  @ApiProperty({ default: 'Twitter url' })
  @IsString()
  @IsOptional()
  TwitterUrl: string;

  @ApiProperty({ default: 'primary role' })
  @IsString()
  @IsOptional()
  primaryRole: string;

  @ApiProperty({ default: 'address' })
  @IsString()
  @IsOptional()
  address: string;

  @ApiProperty({ default: 'city' })
  @IsString()
  @IsOptional()
  city: string;

  @ApiProperty({ default: 'state' })
  @IsString()
  @IsOptional()
  state: string;

  @ApiProperty({ default: 'zipcode' })
  @IsString()
  @IsOptional()
  zipcode: string;

  @ApiProperty({ default: 'bio' })
  @IsString()
  @IsOptional()
  bio: string;

  @ApiProperty({ default: 'mobile phone' })
  @IsString()
  @IsOptional()
  mobilePhone: string;

  @ApiProperty({ default: 'photo' })
  @IsString()
  @IsOptional()
  photo: string;

  @ApiProperty({ default: true })
  @IsBoolean()
  @IsOptional()
  isActive: boolean;
}

export class UserPasswordParamsDto {
  @ApiProperty({ default: 'Current Password' })
  @IsString()
  currentPassword: string;

  @ApiProperty({ default: 'New Password' })
  @IsString()
  newPassword: string;

  @ApiProperty({ default: 'Confirm Password' })
  @IsString()
  confirmPassword: string;
}

export class GetAllUsersDto {
  @ApiProperty({ default: 'Skip' })
  @IsNotEmpty()
  skip: number;

  @ApiProperty({ default: 'Take' })
  @IsNotEmpty()
  take: number;

  @ApiProperty({ default: 'Order By' })
  @IsOptional()
  order: string;

  @ApiProperty({ default: 'Search User' })
  @IsOptional()
  search: string;
}
