import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FollowersLikesService } from '../followers-likes.service';
import { UserLike } from 'src/user-followers-likes/entity/user-like.entity';

@Injectable()
export class UsersLikesService extends FollowersLikesService {
  constructor(
    @InjectRepository(UserLike) public repository: Repository<UserLike>,
  ) {
    super(repository);
  }

  async findAll(payload: any, _params: any) {
    const like = await this.repository.find({
      primaryId: payload.userId,
      publicityType: 1,
    });
    const liking = await this.repository.find({
      userId: payload.userId,
      publicityType: 1,
    });
    return {
      like: like,
      liking: liking,
    };
  }
}
