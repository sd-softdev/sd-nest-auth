import { JwtStrategy } from './jwt.strategy';
import { User } from './../user/user.entity';
import { AuthController } from './auth.controller';
import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { jwtConstants } from './constant';
import { UserService } from './../user/user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LocalStrategy } from './local.strategy';

@Module({
    imports: [
        TypeOrmModule.forFeature([User]),
        PassportModule,
        JwtModule.register({
            secret: jwtConstants.secret,
            signOptions: { expiresIn: '6000s' },
        }),
    ],
    providers: [
        UserService,
        JwtStrategy,
        LocalStrategy,
    ],
    controllers: [AuthController],
})
export class AuthModule { }
