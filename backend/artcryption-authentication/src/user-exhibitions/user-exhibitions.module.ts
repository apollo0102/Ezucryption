import { Module } from '@nestjs/common';
import { UserExhibitionsService } from './user-exhibitions.service';
import { UserExhibitionsController } from './user-exhibitions.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserExhibition } from './entities/user-exhibition.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserExhibition])],
  controllers: [UserExhibitionsController],
  providers: [UserExhibitionsService],
})
export class UserExhibitionsModule {}
