import { AuthController } from './auth.controller';
import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { jwtConstants } from '.';
import { UserService } from '../..';

@Module({
    imports: [
        // PassportModule,
        // JwtModule.register({
        //     secret: jwtConstants.secret,
        //     signOptions: { expiresIn: '6000s' },
        // }),
    ],
    providers: [
        UserService,
        // JwtService,
    ],
    // controllers: [AuthController],
})
export class AuthModule { }
