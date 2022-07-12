import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserFollower } from 'src/user-followers-likes/entity/user-follower.entity';
import { FollowersLikesService } from '../followers-likes.service';

@Injectable()
export class UsersFollowersService extends FollowersLikesService {
  constructor(
    @InjectRepository(UserFollower) public repository: Repository<UserFollower>,
  ) {
    super(repository);
  }

  async findAll(payload: any, params: any) {
    const followers = await this.repository.find({ primaryId: payload.userId });
    const following = await this.repository.find({ userId: payload.userId });
    return {
      followers: followers,
      following: following,
    };
  }
}
