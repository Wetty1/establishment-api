import { Test, TestingModule } from '@nestjs/testing';
import { CreateEstablishmentService } from './create-establishment.service';

describe('CreateEstablishmentService', () => {
  let service: CreateEstablishmentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CreateEstablishmentService],
    }).compile();

    service = module.get<CreateEstablishmentService>(CreateEstablishmentService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
