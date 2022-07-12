import {
  BadRequestException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TeamMember } from './team-member.entity';
import { Repository } from 'typeorm';
import {
  MemberInvitatationParamsDto,
  MemberRestoreParamsDto,
  TeamMemberParamsDto,
} from './dto/team-member-params.dto';
import { MailersService } from 'src/mailers/mailers.service';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class TeamMembersService {
  constructor(
    @InjectRepository(TeamMember)
    private TeamMember: Repository<TeamMember>,
    private mailersService: MailersService,
    private usersService: UsersService,
  ) {}

  async create(currentUserId: string, userId: string) {
    const user = await this.usersService.findOne(currentUserId);

    await this.check_already_exists(user.id, userId);

    const teamMember = new TeamMember();

    teamMember.ownerId = user;
    teamMember.memberId = userId;

    await this.TeamMember.save(teamMember);

    // Sending invitation Email in backgroung

    this.privateSendInvitationEmail(teamMember);

    return teamMember;
  }

  async update(
    userId: string,
    id: number,
    ownerId: string,
    params: MemberRestoreParamsDto,
  ) {
    const user = await this.usersService.findOne(ownerId);

    const teamMember = await this.TeamMember.findOne({
      id: id,
      ownerId: user,
      memberId: userId,
    });
    teamMember.removed = params.removed;

    if (!teamMember) throw new NotFoundException('Team member not found');

    await this.TeamMember.save(teamMember);
    return teamMember;
  }

  async remove(userId: string, id: number, ownerId: string) {
    const user = await this.usersService.findOne(userId);

    await this.TeamMember.delete({
      id: id,
      ownerId: user,
      memberId: userId,
    });
    return {
      error: false,
      message: 'Team member removed successfully',
    };
  }

  async acceptInvitation(userId: string, id: number, code: string) {
    console.log(userId, id, code);

    const teamMember = await this.TeamMember.findOne({
      id: id,
      memberId: userId,
      invitationCode: code,
    });
    console.log(teamMember);
    if (!teamMember) throw new NotFoundException('Team member not found');

    teamMember.accepted = true;
    teamMember.invitationCode = null;

    await this.TeamMember.save(teamMember);
    return teamMember;
  }

  async checkUser(currentUserId: string, userId: string) {
    const user = await this.usersService.findOne(currentUserId);

    const member_exists = await this.TeamMember.find({
      ownerId: user,
      memberId: userId,
    });

    if (member_exists) {
      throw new BadRequestException('Member already exist');
    }
  }

  async check_already_exists(ownerId: string, memberId: string) {
    console.log('private check');
    const user = await this.usersService.findOne(ownerId);

    const member = await this.TeamMember.find({
      ownerId: user,
      memberId: memberId,
    });

    console.log('-- check if exist ---');

    console.log(member);

    if (member.length !== 0)
      throw new BadRequestException('Member already exist');
  }

  // Private Methods
  async privateSendInvitationEmail(member: TeamMember) {
    const link = `/teams/${member.memberId}/${member.id}?code=${member.invitationCode}`;
    const user = await this.usersService.findOne(member.memberId);
    const mailerData = {
      email: user.email,
      subject: 'Email Invitation to Team',
      text: `Click the link to verify your email at THISLINK`,
      html: `<p> Click the link to verify your email at THISLINK </p>`,
    };
    this.mailersService.data(mailerData, link);
    return 1;
  }
}
