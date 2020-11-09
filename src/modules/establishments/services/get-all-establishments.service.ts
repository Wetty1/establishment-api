import { Injectable } from '@nestjs/common';
import { Establishments } from 'modules/establishments/models/establishment.entity';
import { In, Like, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { IFiltersEstablishments } from '../dtos/IFiltersEstablishments.dto';

@Injectable()
export class GetAllEstablishmentsService {
  constructor(
    @InjectRepository(Establishments)
    private readonly establishmetRepository: Repository<Establishments>,
  ) {}

  async execute(params: IFiltersEstablishments) {
    // console.log(params);
    const conditions = [];

    params.city && conditions.push({ city: In(params.city.split(',')) });
    params.neighborhood &&
      conditions.push({
        neighborhood: In(params.neighborhood.split(',')),
      });
    params.type && conditions.push({ type: In(params.type.split(',')) });
    params.search && conditions.push({ address: Like(`%${params.search}%`) });

    console.log(conditions);

    const establishments = await this.establishmetRepository.find({
      where: conditions,
      relations: ['user'],
    });

    console.log(establishments);

    return establishments;
  }
}
