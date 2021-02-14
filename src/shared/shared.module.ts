import { Module } from '@nestjs/common';
import { Hashing } from './providers/hashing';

@Module({
  providers: [Hashing],
  exports: [Hashing],
})
export class SharedModule {}
