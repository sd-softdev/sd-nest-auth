import { Injectable } from '@nestjs/common';
import { BaseService } from 'sd-nest-base';
import { User } from './user.entity';
import { Repository } from 'typeorm';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService extends BaseService<User> {
    constructor(
        @InjectRepository(User)
        private readonly fRepo: Repository<User>,
        private readonly jwtService: JwtService,

    ) {
        super(fRepo);
    }

    async findOne(username: string): Promise<User> {
        return new Promise((resolve, reject) => {
            this.fRepo.find({ name: username }).then(res => {
                if (!res) { reject('User not found!'); }
                if (res.length !== 1) { reject('More then one user with same username found!'); }
                resolve(res[0]);
            });
        });
    }

    async login(user: any) {
        const payload = { username: user.username, sub: user.id };
        return {
            access_token: this.jwtService.sign(payload),
        };
    }

    async validateUser(username: string, pass: string): Promise<any> {
        const user = await this.findOne(username);
        if (user && user.pwd === pass) {
            const { pwd, ...result } = user;
            return result;
        } else if (user && bcrypt.compareSync(pass, user.pwd)) {
            const { pwd, ...result } = user;
            return result;
        }
        return null;
    }
}
