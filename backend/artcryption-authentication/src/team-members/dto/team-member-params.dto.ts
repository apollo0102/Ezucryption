import { Optional } from '@nestjs/common';
import { ApiProperty } from '@nestjsx/crud/lib/crud';
import {
  IsDate,
  IsDateString,
  IsOptional,
  IsString,
  IsUrl,
} from 'class-validator';

export class TeamMemberParamsDto {
  @ApiProperty({ default: '123' })
  @IsString()
  memberId: string;
}

export class MemberInvitatationParamsDto {
  @ApiProperty({ default: false })
  @IsString()
  @IsOptional()
  accepted: boolean;
}

export class MemberRestoreParamsDto {
  @ApiProperty({ default: false })
  @IsString()
  @IsOptional()
  removed: boolean;
}
