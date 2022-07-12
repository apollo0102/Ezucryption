import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAssetDto } from './dto/create-asset.dto';
import { UpdateAssetDto } from './dto/update-asset.dto';
import { Asset } from './entities/asset.entity';

@Injectable()
export class AssetsService {
  constructor(
    @InjectRepository(Asset)
    private readonly assetsRepository: Repository<Asset>,
  ) {}

  async create(createAssetDto: CreateAssetDto) {
    const asset = await this.assetsRepository.save(createAssetDto);
    return asset;
  }

  async findAll(userId: string, collectionId: string = null) {
    const query: { createdBy: string; collectionId?: string } = {
      createdBy: userId,
    };

    if (collectionId) {
      query.collectionId = collectionId;
    }

    const assets = await this.assetsRepository.find({
      where: query,
    });
    return { data: assets };
  }

  async findOne(id: string) {
    const asset = await this.assetsRepository.findOne({
      where: { id },
    });
    if (!asset) {
      throw new NotFoundException(`Asset with ID "${id}" not found`);
    }
    return asset;
  }

  async update(id: string, updateAssetDto: UpdateAssetDto) {
    const asset = await this.findOne(id);
    Object.assign(asset, updateAssetDto);
    await this.assetsRepository.save(asset);
    return asset;
  }

  async remove(id: string) {
    const asset = await this.findOne(id);
    if (!asset) {
      throw new NotFoundException(`Asset with ID "${id}" not found`);
    }
    await this.assetsRepository.delete({ id });
  }
}
