import { Test, TestingModule } from '@nestjs/testing';
import { ListAllFiltersEstablishmentsService } from './list-all-filters-establishments.service';

describe('ListAllFiltersEstablishmentsService', () => {
  let service: ListAllFiltersEstablishmentsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ListAllFiltersEstablishmentsService],
    }).compile();

    service = module.get<ListAllFiltersEstablishmentsService>(ListAllFiltersEstablishmentsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
