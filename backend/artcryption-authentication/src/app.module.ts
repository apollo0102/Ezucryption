import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { AuthenticationModule } from './authentication/authentication.module';
import { MailersModule } from './mailers/mailers.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TeamMembersModule } from './team-members/team-members.module';
import { AwardsModule } from './awards/awards.module';
import { LinksModule } from './links/links.module';
import { PressModule } from './press/press.module';
import { RoleModule } from './role/role.module';
import { FollowersLikesModule } from './user-followers-likes/followers-likes.module';
import { UserNotificationSettingsModule } from './user-notification-settings/user-notification-settings.module';
import { UserExhibitionsModule } from './user-exhibitions/user-exhibitions.module';
import { BillModule } from './bill/bill.module';

console.log(
  process.env.PG_HOST,
  process.env.PG_DATABASE,
  process.env.PG_USERNAME,
  process.env.PG_PASSWORD,
);

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: () => {
        return {
          type: 'postgres',
          host: process.env.PG_HOST,
          port: 5432,
          database: process.env.PG_DATABASE,
          username: process.env.PG_USERNAME,
          password: process.env.PG_PASSWORD,
          logging: true,
          entities: [__dirname + '/**/*.entity{.ts,.js}'],
          synchronize: false,
        };
      },
    }),
    UsersModule,
    AuthenticationModule,
    MailersModule,
    TeamMembersModule,
    AwardsModule,
    LinksModule,
    PressModule,
    RoleModule,
    FollowersLikesModule,
    UserNotificationSettingsModule,
    UserExhibitionsModule,
    BillModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private connection: Connection) {}
}
