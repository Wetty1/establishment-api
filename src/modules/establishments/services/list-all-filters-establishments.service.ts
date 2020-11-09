import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Establishments } from '../models/establishment.entity';

@Injectable()
export class ListAllFiltersEstablishmentsService {
  constructor(
    @InjectRepository(Establishments)
    private readonly establishmentsRepository: Repository<Establishments>,
  ) {}

  async execute(): Promise<any> {
    function onlyUnique(value, index, self) {
      return self.indexOf(value) === index;
    }

    const cityFilter = await this.establishmentsRepository.find({
      select: ['city'],
    });

    const neighborhoodFilter = await this.establishmentsRepository.find({
      select: ['neighborhood'],
    });

    const typeFilter = await this.establishmentsRepository.find({
      select: ['type'],
    });

    const arrCity = cityFilter.map((node) => node.city);
    const arrNeighborhood = neighborhoodFilter.map((node) => node.neighborhood);
    const arrType = typeFilter.map((node) => node.type);

    const filters = {
      city: arrCity.filter(onlyUnique),
      neighborhood: arrNeighborhood.filter(onlyUnique),
      type: arrType.filter(onlyUnique),
    };

    console.log(filters);

    return filters;
  }
}
