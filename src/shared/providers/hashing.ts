import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

@Injectable()
export class Hashing {
  private salt = 10;

  hash(password: string) {
    return bcrypt.hashSync(password, this.salt);
  }

  compare(password: string, hash: string) {
    return bcrypt.compareSync(password, hash);
  }
}
