import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Award } from './awards.entity';
import { UsersModule } from 'src/users/users.module';
import { AwardsController } from './awards.controller';
import { AwardsService } from './awards.service';

@Module({
  controllers: [AwardsController],
  providers: [AwardsService],
  imports: [TypeOrmModule.forFeature([Award]), UsersModule],
})
export class AwardsModule {}
