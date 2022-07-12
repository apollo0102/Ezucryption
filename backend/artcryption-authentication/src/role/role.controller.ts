import {
  Body,
  Controller,
  Get,
  Post,
  Put,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';

import { RoleService } from './role.service';
import { CreateRoleDto } from './dto/create-role.dto';
import { RoleEntity } from './role.entity';
import { UpdateRoleDto } from './dto/update-role.dto';
import { RolesGuard } from './role.guard';
import { JwtAuthGuard } from '../guards/jwt.guard';
import { AssignRoleDto } from './dto/assign-role.dto';

@ApiTags('Role')
@Controller('role')
// @UseGuards(JwtAuthGuard, RolesGuard)
export class RoleController {
  constructor(private readonly roleService: RoleService) {}

  @ApiOperation({ summary: 'Return all roles' })
  @ApiResponse({
    status: 200,
    description: 'Return all of the roles',
  })
  @Get()
  async findAll(): Promise<RoleEntity[]> {
    return this.roleService.findRoles();
  }

  @ApiOperation({ summary: 'Get a Role By Uuid' })
  @ApiResponse({
    status: 200,
    description: 'Successfully returned role',
  })
  @Get(':uuid')
  async findByUuid(@Param('uuid') uuid: string): Promise<RoleEntity> {
    return this.roleService.findByUuid(uuid);
  }

  @ApiOperation({ summary: 'Create Role' })
  @ApiResponse({
    status: 201,
    description: 'Successfully created role.',
  })
  @Post('create')
  async create(@Body() createRoleDto: CreateRoleDto): Promise<any> {
    return this.roleService.create(createRoleDto);
  }

  @ApiOperation({ summary: 'Update Role' })
  @ApiResponse({
    status: 201,
    description: 'Update Role.',
  })
  @Put(':uuid')
  async update(@Param('uuid') uuid: string, @Body() roleData: UpdateRoleDto) {
    const roleInstance = await this.roleService.findByUuid(uuid);
    return this.roleService.updateRole(roleInstance, roleData);
  }

  @ApiOperation({ summary: 'Delete Role' })
  @ApiResponse({
    status: 200,
    description: 'The role has been successfully deleted.',
  })
  @Delete(':uuid')
  async delete(@Param('uuid') uuid: string) {
    return this.roleService.delete(uuid);
  }

  @ApiOperation({ summary: 'Assign Role to user' })
  @ApiResponse({
    status: 200,
    description: 'The role has been assigned to user',
  })
  @Post(':uuid/assign')
  async assignRole(@Param('uuid') uuid: string, @Body() params: AssignRoleDto) {
    return this.roleService.assignRole(uuid, params.role);
  }
}
