import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  IsUUID,
} from 'class-validator';
import { CreateAssetDto } from './create-asset.dto';

export class UpdateAssetDto extends PartialType(CreateAssetDto) {
  @ApiProperty()
  @Expose()
  @IsOptional()
  @IsString()
  title: string;

  @ApiProperty()
  @Expose()
  @IsOptional()
  @IsString()
  titleOfWork: string;

  @ApiProperty()
  @Expose()
  @IsOptional()
  @IsString()
  traits: string;

  @ApiProperty()
  @Expose()
  @IsOptional()
  @IsString()
  placeOfPblication: string;

  @ApiProperty()
  @Expose()
  @IsOptional()
  @IsString()
  publicationDate: string;

  @ApiProperty()
  @Expose()
  @IsOptional()
  @IsString()
  dimensions: string;

  @ApiProperty()
  @Expose()
  @IsOptional()
  @IsString()
  materials: string;

  @ApiProperty()
  @Expose()
  @IsOptional()
  @IsString()
  editionNumber: string;

  @ApiProperty()
  @Expose()
  @IsOptional()
  @IsString()
  numberOfEditions: string;

  @ApiProperty()
  @Expose()
  @IsOptional()
  @IsString()
  tokenAddress: string;

  @ApiProperty()
  @Expose()
  approvedStatusId: string;

  @ApiProperty()
  @Expose()
  @IsOptional()
  @IsBoolean()
  isAddedToFeed: boolean;

  @ApiProperty()
  @Expose()
  @IsOptional()
  @IsBoolean()
  isBlockchainEnabled: boolean;

  @ApiProperty()
  @Expose()
  @IsOptional()
  @IsBoolean()
  isMinted: boolean;

  @ApiProperty()
  @Expose()
  @IsOptional()
  @IsBoolean()
  isPrivate: boolean;

  @ApiProperty()
  @Expose()
  @IsOptional()
  @IsNumber()
  AssetType: number;

  @ApiProperty()
  @Expose()
  description: string;

  @ApiProperty()
  @Expose()
  @IsNotEmpty()
  @IsUUID()
  updatedBy: string; // User ID
}
