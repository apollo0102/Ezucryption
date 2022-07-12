import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { VerifyCallback } from 'passport-google-oauth20';
import { Strategy } from 'passport-instagram';

// This class is used to test Instagram Authentication on NestJS Link
// npm install --save @nestjs/passport passport passport-instagram
// npm install -D @types/passport-instagram
@Injectable()
export class InstagramStrategy extends PassportStrategy(Strategy, 'instagram') {
  constructor(private readonly configService: ConfigService) {
    super({
      clientID: configService.get<string>('INSTAGRAM_CLIENT_ID'),
      clientSecret: configService.get<string>('INSTAGRAM_SECRET'),
      callbackURL: configService.get<string>('INSTAGRAM_CALLBACK_URL'),
      scope: ['user_profile', 'user_media', 'email'],
    });
  }

  async validate(
    accessToken: string,
    refreshToken: string,
    profile: any,
    done: VerifyCallback,
  ): Promise<any> {
    console.log('Instagram Profile: ', profile);
    const { id, name, emails, photos } = profile;
    const user = {
      email: emails[0].value,
      firstName: name.givenName,
      lastName: name.familyName,
      picture: photos[0].value,
      instagram: {
        id: id,
        emails: emails,
        firstName: name.givenName,
        lastName: name.familyName,
        pictures: photos,
        accessToken: accessToken,
        refreshToken: refreshToken,
      },
    };
    console.log(user);
    done(null, user);
  }
}
