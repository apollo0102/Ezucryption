import { Optional } from '@nestjs/common';
import { ApiProperty } from '@nestjsx/crud/lib/crud';
import { Expose } from 'class-transformer';

export class AuthResponseDto {
  @ApiProperty({ default: 'random-uuid' })
  @Expose()
  id: string;

  @ApiProperty({ default: 'test@test.com' })
  @Expose()
  email: string;

  @ApiProperty()
  @Expose()
  firstName: string;

  @ApiProperty()
  @Expose()
  lastName: string;

  @ApiProperty()
  @Expose()
  isActive: boolean;

  @ApiProperty({ default: {} })
  @Expose()
  google: string;

  @ApiProperty({ default: {} })
  @Expose()
  twitter: string;

  @ApiProperty({ default: {} })
  @Expose()
  facebook: string;

  @ApiProperty({ default: {} })
  @Expose()
  address: string;

  @ApiProperty({ default: {} })
  @Expose()
  city: string;

  @ApiProperty({ default: {} })
  @Expose()
  state: string;

  @ApiProperty({ default: {} })
  @Expose()
  zipcode: string;

  @ApiProperty({ default: null })
  @Expose()
  @Optional()
  jwtToken: string;
}
