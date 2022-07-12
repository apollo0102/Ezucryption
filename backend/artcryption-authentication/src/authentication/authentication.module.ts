import { Module } from '@nestjs/common';
import { AuthenticationService } from './authentication.service';
import { AuthenticationController } from './authentication.controller';
import { UsersModule } from 'src/users/users.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtStrategy } from 'src/authentication/strategy/jwt.strategy';
import { GoogleStrategy } from './strategy/google.strategy';
import { TwitterStrategy } from './strategy/twitter.strategy';
import { FacebookStrategy } from './strategy/facebook.strategy';
import { InstagramStrategy } from './strategy/instagram.strategy';

@Module({
  providers: [
    AuthenticationService,
    JwtStrategy,
    GoogleStrategy,
    TwitterStrategy,
    FacebookStrategy,
    InstagramStrategy,
  ],
  controllers: [AuthenticationController],
  imports: [
    UsersModule,
    PassportModule,
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        secret: configService.get<string>('JWT_SECRET') || 'sceretkey',
        signOptions: {
          expiresIn: '3600s',
        },
      }),
    }),
  ],
})
export class AuthenticationModule {}
