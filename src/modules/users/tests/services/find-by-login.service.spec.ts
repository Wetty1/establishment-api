import { Test, TestingModule } from '@nestjs/testing';
import { FindByLoginService } from './find-by-login.service';

describe('FindByLoginService', () => {
  let service: FindByLoginService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FindByLoginService],
    }).compile();

    service = module.get<FindByLoginService>(FindByLoginService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
