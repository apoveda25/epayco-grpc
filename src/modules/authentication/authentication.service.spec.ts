import { Test, TestingModule } from '@nestjs/testing';
import { AutheticationService } from './authentication.service';

describe('AutheticationService', () => {
  let service: AutheticationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AutheticationService],
    }).compile();

    service = module.get<AutheticationService>(AutheticationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
