import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserFollower } from './entity/user-follower.entity';
import { UserLike } from './entity/user-like.entity';
import { UsersModule } from 'src/users/users.module';
import {
  UserFollowerController,
  UserLikeController,
} from './followers-likes.controller';
import { UsersFollowersService } from './users-followers/users-followers.service';
import { UsersLikesService } from './users-likes/users-likes.service';
import { FollowersLikesService } from './followers-likes.service';

@Module({
  controllers: [UserFollowerController, UserLikeController],
  providers: [UsersFollowersService, UsersLikesService, FollowersLikesService],
  imports: [TypeOrmModule.forFeature([UserFollower, UserLike]), UsersModule],
})
export class FollowersLikesModule {}
