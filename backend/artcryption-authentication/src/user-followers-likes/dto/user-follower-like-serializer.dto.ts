import { ApiProperty } from '@nestjsx/crud/lib/crud';
import { Expose, Type } from 'class-transformer';
import { isEnum } from 'class-validator';

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

class FollowerLike {
  @ApiProperty()
  @Expose()
  id: number;

  @Type(() => User)
  @Expose()
  user: User;

  // @ApiProperty()
  // @Expose()
  // primaryId: string;
}

class FollowingLiking {
  @ApiProperty()
  @Expose()
  id: number;

  // @ApiProperty()
  // @Expose()
  // userId: string;

  @Type(() => User)
  @Expose()
  primaryId: User;
}

enum PublicityType {
  follower,
  like,
}

export class UserFollowerLikeSerializerDto {
  @ApiProperty()
  @Expose()
  id: number;

  @Type(() => User)
  @Expose()
  primaryId: User;

  @Type(() => FollowerLike)
  @Expose()
  followers: FollowerLike;

  @Type(() => FollowingLiking)
  @Expose()
  following: FollowingLiking;

  @Type(() => FollowerLike)
  @Expose()
  like: FollowerLike;

  @Type(() => FollowingLiking)
  @Expose()
  liking: FollowingLiking;
}
