import { Injectable } from '@nestjs/common';
import { Establishments } from 'modules/establishments/models/establishment.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class GetAllEstablishmentsService {
  constructor(
    @InjectRepository(Establishments)
    private readonly establishmetRepository: Repository<Establishments>,
  ) {}

  async execute() {
    const establishments = await this.establishmetRepository.find({
      relations: ['user'],
    });

    return establishments;
  }
}
