import { Test, TestingModule } from '@nestjs/testing';
import { GetAllEstablishmentsService } from './get-all-establishments.service';

describe('GetAllEstablishmentsService', () => {
  let service: GetAllEstablishmentsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GetAllEstablishmentsService],
    }).compile();

    service = module.get<GetAllEstablishmentsService>(GetAllEstablishmentsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
