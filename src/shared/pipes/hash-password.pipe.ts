import { Injectable, PipeTransform, ArgumentMetadata } from '@nestjs/common';
import { Hashing } from '../providers/hashing';

@Injectable()
export class HashPasswordPipe implements PipeTransform {
  constructor(private readonly hashing: Hashing) {}

  transform(value: any, metadata: ArgumentMetadata) {
    if (metadata.type === 'body')
      value.password = this.hashing.hash(value.password);

    return value;
  }
}
