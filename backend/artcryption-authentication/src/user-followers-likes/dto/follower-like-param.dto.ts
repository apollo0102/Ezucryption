import { ApiProperty } from '@nestjsx/crud/lib/crud';
import { IsString } from 'class-validator';

export class FollowerLikeParamDto {
  @ApiProperty({ default: 'home' })
  @IsString()
  primaryId: string;
}
