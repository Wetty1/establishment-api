import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UsersController } from './controllers/users.controller';

import { FindByLoginService } from './services/find-by-login.service';
import { RegisterUserService } from './services/register-user.service';

import { User } from './models/user.entity';
import { BCryptHashProvider } from './providers/HashProvider/BCryptHashProvider';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UsersController],
  providers: [FindByLoginService, RegisterUserService, BCryptHashProvider],
  exports: [FindByLoginService, RegisterUserService, BCryptHashProvider],
})
export class UserModule {}
