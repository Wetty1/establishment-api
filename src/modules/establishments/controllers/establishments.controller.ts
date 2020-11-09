import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  Param,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

import { GetAllEstablishmentsService } from '../services/get-all-establishments.service';
import { CreateEstablishmentService } from '../services/create-establishment.service';
import { ICreateNewEstablishment } from '../dtos/ICreateNewEstablishment.dto';
import { UserJwtDTO } from 'request_dto';
import { DeleteEstablishmentService } from '../services/delete-establishment.service';

@UseGuards(AuthGuard('jwt'))
@Controller('establishments')
export class EstablishmentsController {
  constructor(
    @Inject('GetAllEstablishmentsService')
    private readonly getAllService: GetAllEstablishmentsService,

    @Inject('CreateEstablishmentService')
    private readonly createEstablishmentService: CreateEstablishmentService,

    @Inject('DeleteEstablishmentService')
    private readonly deleteEstablishmentService: DeleteEstablishmentService,
  ) {}

  @Get()
  async getAll() {
    const establishments = await this.getAllService.execute();

    return establishments;
  }

  @Post()
  async create(
    @Body() newEstablishments: ICreateNewEstablishment,
    @Request() { user }: any,
  ) {
    const establishment = await this.createEstablishmentService.execute(
      newEstablishments,
      user,
    );

    return establishment;
  }

  @Delete(':id')
  async delete(@Param('id') id: string, @Request() { user }: any) {
    const result = await this.deleteEstablishmentService.execute(id, user);

    return result;
  }
}
