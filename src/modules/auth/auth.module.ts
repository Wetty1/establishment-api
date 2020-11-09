import { Module } from '@nestjs/common';
import { UserModule } from 'modules/users/user.module';
import { AuthController } from './controllers/login.controller';
import { RegisterController } from './controllers/register.controller';
import { LoginService } from './services/auth.service';
import { JwtStrategy } from './strategies/jwt.strategy';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { config } from 'dotenv';

config();

@Module({
  imports: [
    UserModule,
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secret: process.env.SECRET,
      signOptions: {
        expiresIn: '2h',
      },
    }),
  ],
  controllers: [AuthController, RegisterController],
  providers: [LoginService, JwtStrategy],
  exports: [LoginService],
})
export class AuthModule {}
