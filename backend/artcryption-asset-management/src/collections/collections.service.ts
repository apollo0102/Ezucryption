import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCollectionDto } from './dto/create-collection.dto';
import { UpdateCollectionDto } from './dto/update-collection.dto';
import { Collection } from './entities/collection.entity';

@Injectable()
export class CollectionsService {
  constructor(
    @InjectRepository(Collection)
    private readonly collectionsRepository: Repository<Collection>,
  ) {}

  async create(createCollectionDto: CreateCollectionDto) {
    const collection = await this.collectionsRepository.save(
      createCollectionDto,
    );
    return collection;
  }

  async findAll(userId: string) {
    const collections = await this.collectionsRepository.find({
      where: {
        createdBy: userId,
      },
    });
    return { data: collections };
  }

  async findOne(id: string) {
    const collection = await this.collectionsRepository.findOne({
      where: { id },
    });
    if (!collection) {
      throw new NotFoundException(`Collection with ID "${id}" not found`);
    }
    return collection;
  }

  async update(id: string, updateCollectionDto: UpdateCollectionDto) {
    const collection = await this.findOne(id);
    Object.assign(collection, updateCollectionDto);
    await this.collectionsRepository.save(collection);
    return collection;
  }

  async remove(id: string) {
    const collection = await this.collectionsRepository.findOne({
      where: { id },
    });
    if (!collection) {
      throw new NotFoundException(`Collection with ID "${id}" not found`);
    }
    await this.collectionsRepository.delete({ id });
  }
}
