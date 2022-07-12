import {
  BadRequestException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Link } from './links.entity';
import { Repository } from 'typeorm';
import { LinksParamsDto } from './dto/links-params.dto';

@Injectable()
export class LinksService {
  constructor(
    @InjectRepository(Link)
    private Link: Repository<Link>,
  ) {}

  findAll(userId: string) {
    return this.Link.find({ userId: userId });
  }

  findOne(id: number, userId: string) {
    return this.Link.find({ userId: userId, id: id });
  }

  async create(params: LinksParamsDto, userId: string) {
    await this.privateUniqueLink(params.link, userId);
    const Links = await this.Link.create();
    Object.assign(Links, params, { userId: userId });
    await this.Link.save(Links);
    return Links;
  }

  async update(id: number, params: LinksParamsDto, userId: string) {
    await this.privateUniqueLink(params.link, userId);
    const [Links] = await this.Link.find({ id: id, userId: userId });
    if (!Links) throw new NotFoundException('Links not found');
    Object.assign(Links, params);
    await this.Link.save(Links);
    return Links;
  }

  async remove(id: number, userId: string) {
    const [Links] = await this.Link.find({ id: id, userId: userId });
    if (!Links) throw new NotFoundException('Link not found');
    await this.Link.remove(Links);
    return Links;
  }

  checkUser(payloadUserId: string, userId: string) {
    console.log(payloadUserId, ' ', userId);
    if (payloadUserId != userId)
      throw new UnauthorizedException('Not Authorized');
  }

  async privateUniqueLink(link: string, userId: string) {
    const [links] = await this.Link.find({ userId: userId, link: link });
    if (links) throw new BadRequestException('Link already exist');
  }
}
