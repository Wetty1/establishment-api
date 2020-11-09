import { Test, TestingModule } from '@nestjs/testing';
import { DeleteEstablishmentService } from './delete-establishment.service';

describe('DeleteEstablishmentService', () => {
  let service: DeleteEstablishmentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DeleteEstablishmentService],
    }).compile();

    service = module.get<DeleteEstablishmentService>(DeleteEstablishmentService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
