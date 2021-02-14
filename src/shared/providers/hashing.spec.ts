import { Test, TestingModule } from '@nestjs/testing';
import { Hashing } from './hashing';

describe('Hashing', () => {
  let provider: Hashing;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Hashing],
    }).compile();

    provider = module.get<Hashing>(Hashing);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
