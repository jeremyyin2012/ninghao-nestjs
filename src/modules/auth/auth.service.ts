import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { LoginDto } from './login.dto';
import { JwtPayload } from './auth.interface';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(
        private readonly userService: UserService,
        private readonly jwtService: JwtService,
    ) {}

    async login(data: LoginDto) {
        const { username, password } = data
        const entity = await this.userService.findByUserName(username)
        console.log(entity)

        if (!entity) {
            throw new UnauthorizedException('用户不存在')
        }
        const match = await entity.comparePassword(password)
        console.log(match)

        if (!match) {
            throw new UnauthorizedException('密码错误')
        }

        const { id } = entity
        const payload = {username, id}
        const token = this.signToken(payload)

        return {
            ...payload,
            token
        }
    }

    signToken(data: JwtPayload) {
        return this.jwtService.sign(data)
    }
}
