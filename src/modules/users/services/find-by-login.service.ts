import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from '../models/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { ILoginRequest, ILoginResponse } from 'modules/auth/dtos/ILoginDTO.dto';

@Injectable()
export class FindByLoginService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async execute(login: string) {
    const user = await this.userRepository.findOne({
      where: {
        login,
      },
      select: ['id', 'login', 'password', 'name', 'level'],
    });

    return user;
  }
}
