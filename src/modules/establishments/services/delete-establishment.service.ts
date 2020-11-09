import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserJwtDTO } from 'request_dto';
import { Repository } from 'typeorm';
import { Establishments } from '../models/establishment.entity';

@Injectable()
export class DeleteEstablishmentService {
  constructor(
    @InjectRepository(Establishments)
    private readonly establishmentRepository: Repository<Establishments>,
  ) {}

  async execute(id: string, user: UserJwtDTO) {
    if (user.level === 0)
      throw new UnauthorizedException('You do not have permission');

    const establishment = await this.establishmentRepository.findOne({
      where: {
        id,
      },
    });

    if (!establishment)
      throw new NotFoundException('Establishment is not Found');

    if (user.userid !== establishment.userid)
      throw new UnauthorizedException('You do not have permission');

    return this.establishmentRepository.remove(establishment);
  }
}
