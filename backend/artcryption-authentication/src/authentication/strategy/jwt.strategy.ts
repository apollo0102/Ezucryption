// This class is used to provide JWT token on NestJS
// npm install --save @nestjs/passport passport @nestjs/jwt passport-jwt
// https://progressivecoder.com/how-to-implement-nestjs-jwt-authentication-using-jwt-strategy/ (Used as a reference while implementing)

import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly configService: ConfigService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env.JWT_SECRET,
    });
  }

  async validate(payload: any) {
    return { id: payload.userId, email: payload.email };
  }
}
