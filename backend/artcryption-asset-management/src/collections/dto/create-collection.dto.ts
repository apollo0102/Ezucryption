import { ApiProperty } from '@nestjsx/crud/lib/crud';
import { Expose } from 'class-transformer';
import { IsNotEmpty, IsUUID, IsString } from 'class-validator';

export class CreateCollectionDto {
  @ApiProperty()
  @Expose()
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty()
  @Expose()
  @IsNotEmpty()
  shortDescription: string;

  @ApiProperty()
  @Expose()
  @IsNotEmpty()
  description: string;

  @ApiProperty()
  @Expose()
  @IsNotEmpty()
  private: boolean;

  @ApiProperty()
  @Expose()
  @IsNotEmpty()
  @IsUUID()
  createdBy: string; // User ID
}
