import { randomBytes } from 'crypto';
import {
  BeforeInsert,
  Column,
  CreateDateColumn,
  Entity,
  Index,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { User } from 'src/users/users.entity';

@Index(['id'])
@Index(['ownerId', 'memberId'], { unique: true })
@Entity('team_members', { schema: 'public' })
export class TeamMember {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('character varying', {
    name: 'invitation_code, length: 35',
    nullable: true,
  })
  invitationCode: string | null;

  @Column('boolean', { name: 'accepted', nullable: true })
  accepted: boolean | false;

  @Column('boolean', { name: 'removed', nullable: true })
  removed: boolean | false;

  @CreateDateColumn({ type: 'timestamp without time zone', name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp without time zone', name: 'updated_at' })
  updatedAt: Date;

  // This column states that who is the owner of team
  @ManyToOne((type) => User, (user) => user.members, { nullable: false })
  @JoinColumn({ name: 'owner_id' })
  ownerId: User;

  // This column states that who is the member of team
  @Column('uuid', { name: 'member_id' })
  memberId: string;

  // Hooks
  @BeforeInsert()
  async populateEmailVerificationCode() {
    const code = randomBytes(32).toString('hex');
    this.invitationCode = code;
    this.accepted = false;
    this.removed = false;
  }
}
