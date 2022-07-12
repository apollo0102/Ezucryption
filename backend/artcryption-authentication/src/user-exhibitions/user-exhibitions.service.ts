import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserExhibition } from './entities/user-exhibition.entity';
import { CreateUserExhibitionDto } from './dto/create-user-exhibition.dto';
import { UpdateUserExhibitionDto } from './dto/update-user-exhibition.dto';

@Injectable()
export class UserExhibitionsService {
  constructor(
    @InjectRepository(UserExhibition)
    private readonly userExhibitionsRepository: Repository<UserExhibition>,
  ) {}

  async create(createUserExhibitionDto: CreateUserExhibitionDto) {
    const exhibition = await this.userExhibitionsRepository.create(
      createUserExhibitionDto,
    );
    return exhibition;
  }

  async findAll(userId: string) {
    const exhibitions = await this.userExhibitionsRepository.find({ userId });
    return exhibitions;
  }

  findOne(id: string) {
    const exhibition = this.userExhibitionsRepository.findOne({
      where: { id },
    });
    if (!exhibition) {
      throw new NotFoundException(`Exhibition with ID "${id}" not found`);
    }
    return exhibition;
  }

  async update(id: string, updateUserExhibitionDto: UpdateUserExhibitionDto) {
    const exhibition = await this.findOne(id);
    Object.assign(exhibition, updateUserExhibitionDto);
    await this.userExhibitionsRepository.save(exhibition);

    return exhibition;
  }

  async remove(id: string) {
    await this.findOne(id);
    await this.userExhibitionsRepository.delete({ id });
  }
}
