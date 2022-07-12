import { ApiProperty } from '@nestjsx/crud/lib/crud';
import { Expose } from 'class-transformer';

export class PressSerializerDto {
  @ApiProperty()
  @Expose()
  id: number;

  @ApiProperty()
  @Expose()
  title: string;

  @ApiProperty()
  @Expose()
  date: string;

  @ApiProperty()
  @Expose()
  link: string;
}