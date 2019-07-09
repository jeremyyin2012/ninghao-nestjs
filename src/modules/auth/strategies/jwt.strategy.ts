import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy, ExtractJwt } from "passport-jwt";
import { JwtPayload } from "../auth.interface";
import { UserService } from "../../user/user.service";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(
        private readonly userService: UserService
    ) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: 'nDSAR3+K4pLD+HIl9xWFY/n7maMxLwPTj5gscZvd9Vo=',
        })
    }

    async validate(payload: JwtPayload) {
        console.log(payload)
        const { username } = payload
        const entity = await this.userService.findByUserName(username)
        if (!entity) {
            throw new UnauthorizedException('用户不存在')
        }
        return entity
    }
}