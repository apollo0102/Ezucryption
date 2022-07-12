import { Exclude } from 'class-transformer';
import { IsString } from 'class-validator';
import {
  Column,
  Entity,
  Generated,
  PrimaryGeneratedColumn,
  Unique,
} from 'typeorm';

@Entity('role_entity')
@Unique(['uuid'])
@Unique(['name'])
export class RoleEntity {
  @PrimaryGeneratedColumn()
  @Exclude()
  id: number;

  @Column()
  @Generated('uuid')
  uuid: string;

  @Column()
  @IsString()
  name: string;
}
