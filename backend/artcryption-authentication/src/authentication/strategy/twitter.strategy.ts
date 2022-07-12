import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { VerifyCallback } from 'passport-google-oauth20';
import { Strategy } from 'passport-twitter';

// This class is used to test Twitter Authentication on NestJS Link
// npm install --save @nestjs/passport passport passport-twitter-oauth2
// npm install -D @types/passport-twitter
@Injectable()
export class TwitterStrategy extends PassportStrategy(Strategy, 'twitter') {
  constructor(private readonly configService: ConfigService) {
    super({
      consumerKey: configService.get<string>('TWITTER_CLIENT_ID'),
      consumerSecret: configService.get<string>('TWITTER_SECRET'),
      callbackURL: configService.get<string>('TWITTER_CALLBACK_URL'),
      includeEmail: true,
    });
  }

  async validate(
    accessToken: string,
    refreshToken: string,
    profile: any,
    done: VerifyCallback,
  ): Promise<any> {
    const { id, username, displayName, emails, photos } = profile;
    const [firstName, lastName] = displayName.split(' ');
    const user = {
      email: emails[0].value,
      firstName: firstName,
      lastName: lastName,
      picture: photos[0].value,
      twitter: {
        id: id,
        emails,
        firstName: firstName,
        lastName: lastName,
        username: username,
        pictures: photos,
        accessToken: accessToken,
        refreshToken: refreshToken,
      },
    };
    done(null, user);
  }
}
