import { Module } from '@nestjs/common';
import { EstablishmentsController } from './controllers/establishments.controller';
import { GetAllEstablishmentsService } from './services/get-all-establishments.service';
import { CreateEstablishmentService } from './services/create-establishment.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Establishments } from './models/establishment.entity';
import { DeleteEstablishmentService } from './services/delete-establishment.service';
import { ListAllFiltersEstablishmentsService } from './services/list-all-filters-establishments.service';

@Module({
  imports: [TypeOrmModule.forFeature([Establishments])],
  controllers: [EstablishmentsController],
  providers: [
    GetAllEstablishmentsService,
    CreateEstablishmentService,
    DeleteEstablishmentService,
    ListAllFiltersEstablishmentsService,
  ],
})
export class EstablishmentsModule {}
