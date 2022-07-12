import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Request,
  BadRequestException,
  UnauthorizedException,
  Query,
} from '@nestjs/common';
import { TeamMembersService } from './team-members.service';
import {
  MemberRestoreParamsDto,
  MemberInvitatationParamsDto,
  TeamMemberParamsDto,
} from './dto/team-member-params.dto';
import { Serialize } from 'src/interceptors/serializer.interceptor';
import { TeamMemberSerializerDto } from './dto/team-member-serializer.dto';
import {
  ApiBearerAuth,
  ApiHeader,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/guards/jwt.guard';

@ApiTags('Team Members')
@ApiBearerAuth()
@Controller('teams')
export class TeamsController {
  constructor(private readonly TeamMembersService: TeamMembersService) {}
  // Used to invite members
  @ApiResponse({
    status: 201,
    description: 'Creating TeamMember',
  })
  @ApiResponse({
    status: 400,
    description: 'TeamMember already exist',
  })
  @UseGuards(JwtAuthGuard)
  @Post(':userId')
  async create(@Request() req, @Param('userId') userId: string) {
    return this.TeamMembersService.create(req.user.id, userId);
  }
  // Used by owner to remove the member
  @ApiResponse({
    status: 200,
    description: 'Adding/restoring member again to the team',
  })
  @UseGuards(JwtAuthGuard)
  @Patch('/:userId/:id')
  async update(
    @Request() req,
    @Param('userId') userId: string,
    @Param('id') id: number,
    @Body() params: MemberRestoreParamsDto,
  ) {
    return this.TeamMembersService.update(userId, id, req.user.id, params);
  }

  // Removed the member from team member list
  @ApiResponse({
    status: 200,
    description: 'Deleting Member from team',
  })
  @UseGuards(JwtAuthGuard)
  @Delete('/:userId/:id')
  async remove(
    @Request() req,
    @Param('userId') userId: string,
    @Param('id') id: number,
  ) {
    return this.TeamMembersService.remove(userId, id, req.user.id);
  }

  @ApiResponse({
    status: 200,
    description: 'Invite accepted by the member',
  })
  @Get('/:userId/:id/')
  async acceptInvite(
    @Param('userId') userId: string,
    @Param('id') id: number,
    @Query('code') code: string,
  ) {
    return await this.TeamMembersService.acceptInvitation(userId, id, code);
  }
}
