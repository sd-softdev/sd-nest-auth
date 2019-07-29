import { Controller, UseGuards, Post, Request, Get, Body } from '@nestjs/common';
import { BaseController } from 'sd-nest-base';
import { UserService } from './../user/user.service';
import { User } from './../user/user.entity';
import { AuthGuard } from '@nestjs/passport';
import * as bcrypt from 'bcrypt';

@Controller('user')
export class AuthController extends BaseController<User> {
    constructor(
        public readonly service: UserService,
    ) {
        super();
    }

    @Post()
    createOne(@Body() obj: User) {
        const salt = bcrypt.genSaltSync(1);
        obj.pwd = bcrypt.hashSync(obj.pwd, salt);
        return super.createOne(obj);
    }

    @UseGuards(AuthGuard('local'))
    @Post('login')
    async login(@Request() req) {
        return this.service.login(req.user);
    }

    @UseGuards(AuthGuard('jwt'))
    @Get('me')
    getProfile(@Request() req) {
      return req.body;
    }
}
