import {
  Inject,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ILoginRequest, ILoginResponse } from '../dtos/ILoginDTO.dto';
import { compareSync } from 'bcrypt';
import { UserJwtDTO } from 'request_dto';
import { FindByLoginService } from 'modules/users/services/find-by-login.service';
import { BCryptHashProvider } from 'modules/users/providers/HashProvider/BCryptHashProvider';

@Injectable()
export class LoginService {
  constructor(
    @Inject('JwtService')
    private readonly jwtService: JwtService,

    @Inject('BCryptHashProvider')
    private readonly hashProvider: BCryptHashProvider,

    @Inject('FindByLoginService')
    private readonly findByLoginService: FindByLoginService,
  ) {}

  async authenticate({
    login,
    password,
  }: ILoginRequest): Promise<ILoginResponse> {
    const user = await this.findByLoginService.execute(login);

    if (!user) {
      throw new NotFoundException('User is not found');
    }

    const passwordMatched = await this.hashProvider.compareHash(
      password,
      user.password,
    );

    if (!passwordMatched) {
      throw new UnauthorizedException('Invalid password');
    }

    const payload: UserJwtDTO = {
      userid: user.id,
      level: user.level,
    };

    return {
      user: {
        name: user.name,
        level: user.level,
      },
      token: this.jwtService.sign(payload),
    };
  }
}
