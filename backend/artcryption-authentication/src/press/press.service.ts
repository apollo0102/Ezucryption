import {
  BadRequestException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { title } from 'process';
import { Press } from './press.entity';
import { Repository } from 'typeorm';
import { PressParamsDto } from './dto/press-params.dto';

@Injectable()
export class PressService {
  constructor(
    @InjectRepository(Press)
    private Press: Repository<Press>,
  ) {}

  findAll(userId: string) {
    return this.Press.find({ userId: userId });
  }

  findOne(id: number, userId: string) {
    return this.Press.find({ userId: userId, id: id });
  }

  async create(params: PressParamsDto, userId: string) {
    await this.privateUniqueName(params.title, userId);
    const press = await this.Press.create();
    Object.assign(press, params, { userId: userId });
    await this.Press.save(press);
    return press;
  }

  async update(id: number, params: PressParamsDto, userId: string) {
    await this.privateUniqueName(params.title, userId);
    const [press] = await this.Press.find({ id: id, userId: userId });
    if (!press) throw new NotFoundException('Press not found');
    Object.assign(press, params);
    await this.Press.save(press);
    return press;
  }

  async remove(id: number, userId: string) {
    const [press] = await this.Press.find({ id: id, userId: userId });
    if (!press) throw new NotFoundException('Press not found');
    await this.Press.remove(press);
    return press;
  }

  checkUser(payloadUserId: string, userId: string) {
    if (payloadUserId != userId)
      throw new UnauthorizedException('Not Authorized');
  }

  async privateUniqueName(title: string, userId: string) {
    const [press] = await this.Press.find({ userId: userId, title: title });
    if (press) throw new BadRequestException('Press already exist');
  }
}
