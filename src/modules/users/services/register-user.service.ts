import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { validateOrReject } from 'class-validator';
import { ICreateNewUser } from 'modules/users/dtos/ICreateNewUser.dto';
import { User } from 'modules/users/models/user.entity';
import { Repository } from 'typeorm';
import { BCryptHashProvider } from '../providers/HashProvider/BCryptHashProvider';

@Injectable()
export class RegisterUserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,

    @Inject('BCryptHashProvider')
    private readonly hashProvider: BCryptHashProvider,
  ) {}

  async execute({ name, password, level, login }: ICreateNewUser) {
    const existsLogin = await this.userRepository.findOne({ where: { login } });

    if (existsLogin) throw new UnauthorizedException('Login already used');

    const hashedPassword = await this.hashProvider.generateHash(password);

    const user = this.userRepository.create({
      name,
      password: hashedPassword,
      level,
      login,
    });

    validateOrReject(user).catch(() => {
      throw new UnauthorizedException('Fill in the fields correctly');
    });

    return await this.userRepository.save(user);
  }
}
