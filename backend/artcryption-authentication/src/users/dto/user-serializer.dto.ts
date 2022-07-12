import { Optional } from '@nestjs/common';
import { ApiProperty } from '@nestjsx/crud/lib/crud';
import { Expose } from 'class-transformer';
import {
  IsDate,
  IsDateString,
  IsOptional,
  IsString,
  IsUrl,
} from 'class-validator';

export class UserBasicSerializerDto {
  @ApiProperty({ default: 'random-uuid' })
  @Expose()
  userId: string;

  @ApiProperty()
  @Expose()
  firstName: string;

  @ApiProperty()
  @Expose()
  lastName: string;

  @ApiProperty()
  @Expose()
  address: string;

  @ApiProperty()
  @Expose()
  city: string;

  @ApiProperty()
  @Expose()
  state: string;

  @ApiProperty()
  @Expose()
  zipcode: string;

  @ApiProperty()
  @Expose()
  pseudonym: string;

  @ApiProperty()
  @Expose()
  organization: string;

  @ApiProperty()
  @Expose()
  bio: string;

  @ApiProperty()
  @Expose()
  website: string;

  @ApiProperty()
  @Expose()
  photo: string;

  @ApiProperty()
  @Expose()
  mobilePhone: string;

  @ApiProperty()
  @Expose()
  digital_identity_status: boolean;

  @ApiProperty()
  @Expose()
  wallet_address: boolean;

  @ApiProperty()
  @Expose()
  facebookUrl: string;

  @ApiProperty()
  @Expose()
  twitterUrl: string;

  @ApiProperty()
  @Expose()
  instagramUrl: string;

  @ApiProperty()
  @Expose()
  digital_identity: string;

  @ApiProperty()
  @Expose()
  primaryRole: string;

  @ApiProperty()
  @Expose()
  isActive: boolean;
}

export class UserDetailedSerializerDto extends UserBasicSerializerDto {
  constructor() {
    super();
  }
}
