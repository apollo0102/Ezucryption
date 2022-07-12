import { ApiProperty } from '@nestjsx/crud/lib/crud';
import { Expose } from 'class-transformer';
import { IsNotEmpty, IsInt, IsUUID } from 'class-validator';

export class CreateUserExhibitionDto {
  @ApiProperty()
  @Expose()
  @IsNotEmpty()
  @IsUUID()
  userId: string;

  @ApiProperty()
  @Expose()
  @IsNotEmpty()
  title: string;

  @ApiProperty()
  @Expose()
  @IsNotEmpty()
  galary: string;

  @ApiProperty()
  @Expose()
  @IsNotEmpty()
  url: string;

  @ApiProperty()
  @Expose()
  @IsNotEmpty()
  @IsInt()
  month: number;

  @ApiProperty()
  @Expose()
  @IsNotEmpty()
  @IsInt()
  year: number;
}
