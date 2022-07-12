import { Optional } from '@nestjs/common';
import { ApiProperty } from '@nestjsx/crud/lib/crud';
import {
  IsDate,
  IsDateString,
  IsOptional,
  IsString,
  IsUrl,
} from 'class-validator';

export class AwardsParamsDto {
  @ApiProperty({ default: 'award 1' })
  @IsString()
  title: string;

  @ApiProperty({ default: 'YYYY-MM-DD' })
  @IsOptional()
  @IsDateString()
  date: string;

  @ApiProperty({ default: 'https://www.award.com' })
  @IsOptional()
  @IsString()
  @IsUrl()
  link: string;
}
