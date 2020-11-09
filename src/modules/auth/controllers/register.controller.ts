import { Body, Controller, Inject, Post } from '@nestjs/common';
import { ICreateNewUser } from 'modules/users/dtos/ICreateNewUser.dto';
import { RegisterUserService } from 'modules/users/services/register-user.service';

@Controller('register')
export class RegisterController {
  constructor(
    @Inject('RegisterUserService')
    private readonly registerUserService: RegisterUserService,
  ) {}

  @Post()
  async registerUser(@Body() newUser: ICreateNewUser) {
    console.log(newUser);
    const user = await this.registerUserService.execute(newUser);

    delete user.password;

    return user;
  }
}
