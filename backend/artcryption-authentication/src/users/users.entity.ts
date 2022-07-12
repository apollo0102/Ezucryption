import {
  Column,
  Entity,
  Index,
  OneToMany,
  ManyToMany,
  ManyToOne,
  JoinTable,
  PrimaryGeneratedColumn,
  BeforeInsert,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
} from 'typeorm';
import { IsEmail, IsNotEmpty } from 'class-validator';
import { randomBytes } from 'crypto';
import { TeamMember } from 'src/team-members/team-member.entity';
import { Award } from 'src/awards/awards.entity';
import { Press } from 'src/press/press.entity';
import { Link } from 'src/links/links.entity';
import { RoleEntity } from 'src/role/role.entity';
import { UserNotificationSettings } from '../user-notification-settings/entities/user-notification-setting.entity';

export enum walletTypes {
  ethereum = 'ethereum',
}

export enum verificationPreference {
  browse = 'BROWSE',
  upload = 'UPLOAD_MANAGE',
  none = 'NONE',
}

@Entity('users', { schema: 'public' })
export class User {
  @PrimaryGeneratedColumn('uuid', { name: 'id' })
  id: string;

  @Column('character varying', {
    name: 'first_name',
    nullable: true,
    length: 150,
  })
  firstName: string | null;

  @Column('character varying', {
    name: 'last_name',
    nullable: true,
    length: 150,
  })
  lastName: string | null;

  @Column('character varying', {
    name: 'username',
    nullable: true,
    length: 150,
  })
  username: string | null;

  @Column('character varying', {
    name: 'email',
    nullable: false,
    length: 100,
    unique: true,
  })
  @IsEmail({}, { message: 'incorrect email format' })
  @IsNotEmpty({ message: 'email is required' })
  email: string;

  @Column('character varying', {
    name: 'password',
    nullable: false,
    length: 100,
  })
  password: string;

  @Column('character varying', { name: 'website', nullable: true, length: 256 })
  website: string | null;

  @Column('text', { name: 'bio', nullable: true })
  bio: string | null;

  @Column('character varying', {
    name: 'mobile_phone',
    nullable: true,
    length: 40,
  })
  mobilePhone: string | null;

  // Superadmin Permissions
  @Column('boolean', { name: 'is_active', default: true })
  isActive = true;

  @Column('boolean', { name: 'is_banned', default: false })
  isBanned = false;

  @Column('boolean', { name: 'is_suspended', default: false })
  isSuspended = false;

  @Column('boolean', { name: 'two_factor_auth', default: false })
  twoFactorAuth = false;

  // User Authentication Services Columns
  @Column('boolean', { name: 'two_factor_auth_enabled', default: false })
  twoFactorAuthEnabled: boolean | false;

  @Column('character varying', {
    name: 'forgot_password_code, length: 35',
    nullable: true,
  })
  forgotPasswordCode: string | null;

  @Column('character varying', {
    name: 'verification_email_code, length: 35',
    nullable: true,
  })
  verificationEmailCode: string | null;

  @Column('character varying', {
    name: 'login_otp_code, length: 35',
    nullable: true,
  })
  loginOtpCode: string | null;

  @Column('boolean', { name: 'user_verification', default: false })
  userVerification = false;

  @Column('timestamp without time zone', {
    name: 'user_verification_approval_date',
    nullable: true,
  })
  userVerificationApprovalDate: Date | null;

  //user verification section fields
  @Column('character varying', {
    name: 'verification_code, length: 35',
    nullable: true,
  })
  verificationCode: string | null;

  @Column('boolean', { name: 'verified', default: false })
  verified = false;

  @Column({
    type: 'enum',
    enum: verificationPreference,
    default: verificationPreference.none,
  })
  verificationType: verificationPreference;

  @Column('character varying', {
    name: 'user_document',
    nullable: true,
  })
  userDocument: string | null;

  //user verification section fields end

  @Column('character varying', {
    name: 'facebook_url, length: 200',
    nullable: true,
  })
  facebookUrl: string | null;

  @Column('character varying', {
    name: 'instagram_url, length: 200',
    nullable: true,
  })
  instagramUrl: string | null;

  @Column('character varying', {
    name: 'twitter_url, length: 200',
    nullable: true,
  })
  twitterUrl: string | null;

  @Column({ type: 'jsonb', array: false, default: {}, name: 'google' })
  google: string;

  @Column({ type: 'jsonb', array: false, default: {}, name: 'facebook' })
  facebook: string;

  @Column({ type: 'jsonb', array: false, default: {}, name: 'twitter' })
  twitter: string;

  @Column({ type: 'jsonb', array: false, default: {}, name: 'instagram' })
  instagram: string;

  @CreateDateColumn({ type: 'timestamp without time zone', name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp without time zone', name: 'updated_at' })
  updatedAt: Date;

  @Column('timestamp without time zone', { name: 'deleted_at', nullable: true })
  deletedAt: Date | null;

  @Column('character varying', {
    name: 'pseudonym',
    nullable: true,
    length: 100,
  })
  pseudonym: string | null;

  @Column('character varying', { name: 'discord', nullable: true, length: 256 })
  discord: string | null;

  @Column('character varying', {
    name: 'organization',
    nullable: true,
    length: 100,
  })
  organization: string | null;

  @Column({ default: null })
  address: string;

  @Column({ default: null })
  city: string;

  @Column({ default: null })
  state: string;

  @Column({ default: null })
  zipcode: string;

  @Column({ default: null })
  photo: string;

  @Column({ default: null })
  digital_identity: string;

  @Column({ default: null })
  wallet_address: string;

  @Column({ default: null })
  primaryRole: string;

  @Column('int4', { name: 'primary_role_id', default: null })
  primaryRoleId: number;

  @Column('int4', { name: 'image_id', default: null })
  imageId: number;

  @Column('uuid', { name: 'invited_by', default: null })
  invitedBy: string | null;

  @Column('boolean', { name: 'status', default: false })
  digital_identity_status: boolean;

  @OneToMany((type) => TeamMember, (member) => member.ownerId, {
    eager: true,
  })
  members: [];

  @OneToMany((type) => Award, (awards) => awards.userId, {
    eager: true,
  })
  awards: [];

  @OneToMany((type) => Press, (press) => press.userId, {
    eager: true,
  })
  press: [];

  @OneToOne(
    () => UserNotificationSettings,
    (notifications) => notifications.userId,
    {
      eager: true,
    },
  )
  notifications: [];

  @OneToMany((type) => Link, (links) => links.userId, {
    eager: true,
  })
  links: [];

  @Column({
    type: 'enum',
    enum: walletTypes,
    default: walletTypes.ethereum,
  })
  walletType: walletTypes;

  @ManyToMany((type) => RoleEntity)
  @JoinTable()
  roles: RoleEntity[];
  // Hooks
  @BeforeInsert()
  async populateEmailVerificationCode() {
    const code = randomBytes(32).toString('hex');
    this.verificationEmailCode = code;
    this.verificationCode = code;
  }
}
