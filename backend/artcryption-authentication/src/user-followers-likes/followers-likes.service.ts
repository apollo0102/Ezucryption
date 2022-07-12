import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';

import { FollowerLikeParamDto } from './dto/follower-like-param.dto';

export class FollowersLikesService {
  constructor(
    // Inject asset and collection repository in future
    public repository: any,
  ) {}

  async create(payload: any, params: FollowerLikeParamDto) {
    const userId = payload.userId;
    const entry = await this.repository.create();
    Object.assign(entry, params, { userId: userId });
    console.log('Entry: ', entry);
    try {
      await this.repository.save(entry);
    } catch (Error) {
      throw new BadRequestException('Entry already there');
    }
    return this.repository.findOne(entry.id);
  }

  findAll(payload: any, params: any) {}

  async remove(payload: any, id: number) {
    const entry = await this.repository.findOne(id);
    if (!entry) throw new NotFoundException('Entry not found');
    console.log('Entry: ', entry);
    if (entry.userId == payload.userId) this.repository.remove(entry);
    return entry;
  }
}
