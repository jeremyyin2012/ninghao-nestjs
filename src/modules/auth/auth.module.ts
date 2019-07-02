import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UserModule } from '../user/user.module';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    UserModule,
    JwtModule.register({
      secretOrPrivateKey: 'nDSAR3+K4pLD+HIl9xWFY/n7maMxLwPTj5gscZvd9Vo=',
      signOptions: {
        expiresIn: '12h',
      }
    })
  ],
  controllers: [AuthController],
  providers: [AuthService]
})
export class AuthModule {}
