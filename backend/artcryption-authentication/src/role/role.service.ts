/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, In } from 'typeorm';
import { RoleEntity } from './role.entity';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { User } from 'src/users/users.entity';

@Injectable()
export class RoleService {
  constructor(
    @InjectRepository(RoleEntity)
    private readonly roleRepository: Repository<RoleEntity>,

    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async findRoles(): Promise<RoleEntity[]> {
    return this.roleRepository.find();
  }

  async findByUuid(uuid: string): Promise<RoleEntity> {
    const role = await this.roleRepository.findOne({ where: { uuid } });
    if (!role) {
      throw new NotFoundException(`Role with UUID: ${uuid} not found.`);
    }
    return role;
  }

  async findByName(name: string): Promise<RoleEntity> {
    const role = await this.roleRepository.findOne({ where: { name } });
    if (!role) {
      throw new NotFoundException(`Role with name: ${name} not found.`);
    }
    return role;
  }

  async findByNames(roles: CreateRoleDto[]): Promise<RoleEntity[]> {
    const roleNames = roles.map((role) => role.name);
    return this.roleRepository.find({
      where: { name: In(roleNames) },
    });
  }

  async create(createRoleDto: CreateRoleDto): Promise<RoleEntity> {
    const { name } = createRoleDto;
    const newRole = new RoleEntity();

    newRole.name = name;
    return this.roleRepository.save(newRole);
  }

  async updateRole(
    roleInstance: RoleEntity,
    roleData: UpdateRoleDto,
  ): Promise<RoleEntity> {
    Object.assign(roleInstance, roleData);
    return this.roleRepository.save(roleInstance);
  }

  async delete(uuid: string): Promise<any> {
    return this.roleRepository.delete({ uuid });
  }

  async assignRole(uuid: string, name: string): Promise<any> {
    const user = await this.userRepository.findOne({ id: uuid });

    const role = await this.findByName(name);

    user.roles = [role];

    await this.userRepository.save(user);

    return user;
  }
}
