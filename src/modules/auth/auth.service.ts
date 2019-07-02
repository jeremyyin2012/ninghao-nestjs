import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { LoginDto } from './login.dto';

@Injectable()
export class AuthService {
    constructor(
        private readonly userService: UserService,
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

        return entity
    }
}
