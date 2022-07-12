import { ApiProperty } from '@nestjsx/crud/lib/crud';
import { Expose, Type } from 'class-transformer';

class User {
  @ApiProperty()
  @Expose()
  id: string;

  @ApiProperty()
  @Expose()
  email: string;

  @ApiProperty()
  @Expose()
  firstName: string;

  @ApiProperty()
  @Expose()
  lastName: string;
}

export class TeamMemberSerializerDto {
  @ApiProperty()
  @Expose()
  id: number;

  @ApiProperty()
  @Expose()
  accepted: boolean;

  @ApiProperty()
  @Expose()
  removed: boolean;

  @Type(() => User)
  @Expose()
  members: User;
}
