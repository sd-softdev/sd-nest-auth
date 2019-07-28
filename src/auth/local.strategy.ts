import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from './../user';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: UserService) {
    super();
  }

  async validate(username: string, password: string) {
    // const user = await this.authService.validateUser(username, password);
    const user = null;
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
