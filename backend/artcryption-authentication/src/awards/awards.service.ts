import {
  BadRequestException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Award } from './awards.entity';
import { Repository } from 'typeorm';
import { AwardsParamsDto } from './dto/awards-params.dto';

@Injectable()
export class AwardsService {
  constructor(
    @InjectRepository(Award)
    private Awards: Repository<Award>,
  ) {}

  findAll(userId: string) {
    return this.Awards.find({ userId: userId });
  }

  findOne(id: number, userId: string) {
    return this.Awards.find({ userId: userId, id: id });
  }

  async create(params: AwardsParamsDto, userId: string) {
    await this.privateUniqueTitle(params.title, userId);
    const awards = await this.Awards.create();
    Object.assign(awards, params, { userId: userId });
    await this.Awards.save(awards);
    return awards;
  }

  async update(id: number, params: AwardsParamsDto, userId: string) {
    await this.privateUniqueTitle(params.title, userId);
    const [awards] = await this.Awards.find({ id: id, userId: userId });
    if (!awards) throw new NotFoundException('Awards not found');
    Object.assign(awards, params);
    await this.Awards.save(awards);
    return awards;
  }

  async remove(id: number, userId: string) {
    const [awards] = await this.Awards.find({ id: id, userId: userId });
    if (!awards) throw new NotFoundException('Awards not found');
    await this.Awards.remove(awards);
    return awards;
  }

  checkUser(payloadUserId: string, userId: string) {
    if (payloadUserId != userId)
      throw new UnauthorizedException('Not Authorized');
  }

  async privateUniqueTitle(title: string, userId: string) {
    const [award] = await this.Awards.find({ userId: userId, title: title });
    if (award) throw new BadRequestException('Award already exist');
  }
}
