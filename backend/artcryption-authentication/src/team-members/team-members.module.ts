import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TeamMember } from './team-member.entity';
import { UsersModule } from 'src/users/users.module';
import { TeamsController } from './team-members.controller';
import { TeamMembersService } from './team-members.service';

@Module({
  controllers: [TeamsController],
  providers: [TeamMembersService],
  imports: [TypeOrmModule.forFeature([TeamMember]), UsersModule],
})
export class TeamMembersModule {}
