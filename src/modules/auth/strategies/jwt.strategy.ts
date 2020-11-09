import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { UserJwtDTO } from 'request_dto';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env.SECRET,
    });
  }

  async validate(payload: UserJwtDTO) {
    return {
      userid: payload.userid,
      level: payload.level,
    };
  }
}
