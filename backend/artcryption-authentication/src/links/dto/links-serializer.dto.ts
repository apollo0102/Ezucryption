import { ApiProperty } from '@nestjsx/crud/lib/crud';
import { Expose } from 'class-transformer';

export class LinksSerializerDto {
  @ApiProperty()
  @Expose()
  id: number;

  @ApiProperty()
  @Expose()
  date: string;

  @ApiProperty()
  @Expose()
  link: string;
}
