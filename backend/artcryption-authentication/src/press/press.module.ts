import { Module } from '@nestjs/common';
import { PressService } from './press.service';
import { PressController } from './press.controller';
import { Press } from './press.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from 'src/users/users.module';

@Module({
  controllers: [PressController],
  providers: [PressService],
  imports: [TypeOrmModule.forFeature([Press]), UsersModule],
})
export class PressModule {}
