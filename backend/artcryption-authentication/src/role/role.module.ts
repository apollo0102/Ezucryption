import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RoleEntity } from './role.entity';
import { RoleService } from './role.service';
import { RoleController } from './role.controller';
import { UsersModule } from 'src/users/users.module';
import { User } from 'src/users/users.entity';

@Module({
  imports: [TypeOrmModule.forFeature([RoleEntity, User])],
  controllers: [RoleController],
  providers: [RoleService],
  exports: [RoleService],
})
export class RoleModule {}
