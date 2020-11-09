import { Body, Controller, Inject, Post } from '@nestjs/common';
import { ILoginRequest, ILoginResponse } from '../dtos/ILoginDTO.dto';
import { LoginService } from '../services/auth.service';

@Controller('login')
export class AuthController {
  constructor(
    @Inject('LoginService')
    private readonly loginService: LoginService,
  ) {}

  @Post()
  async login(@Body() loginDto: ILoginRequest): Promise<ILoginResponse> {
    try {
      const loginData = await this.loginService.authenticate(loginDto);

      return loginData;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}
