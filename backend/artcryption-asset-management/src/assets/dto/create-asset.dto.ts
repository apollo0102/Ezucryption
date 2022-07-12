import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { IsNotEmpty, IsUrl, IsUUID } from 'class-validator';

export class CreateAssetDto {
  @ApiProperty()
  @Expose()
  @IsNotEmpty()
  @IsUrl()
  externalLink: string;

  @ApiProperty()
  @Expose()
  @IsNotEmpty()
  @IsUUID()
  ownerId: string;

  @ApiProperty()
  @Expose()
  @IsNotEmpty()
  @IsUUID()
  collectionId: string;

  @ApiProperty()
  @Expose()
  @IsNotEmpty()
  @IsUUID()
  createdBy: string;
}
