import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserJwtDTO } from 'request_dto';
import { Repository } from 'typeorm';
import { ICreateNewEstablishment } from '../dtos/ICreateNewEstablishment.dto';
import { Establishments } from '../models/establishment.entity';

import { getCoordinates } from '../../../shared/geocoding';

@Injectable()
export class CreateEstablishmentService {
  constructor(
    @InjectRepository(Establishments)
    private readonly establishmentRepository: Repository<Establishments>,
  ) {}

  async execute(
    { address, city, neighborhood, type }: ICreateNewEstablishment,
    user: UserJwtDTO,
  ) {
    if (!user || user.level !== 1)
      throw new UnauthorizedException('You do not have permission');

    const coordinates = await getCoordinates(`${address}, ${city}`);

    const newEstablishment = this.establishmentRepository.create({
      address,
      city,
      neighborhood,
      type,
      coordinates,
      userid: user.userid,
    });

    return this.establishmentRepository.save(newEstablishment);
  }
}
