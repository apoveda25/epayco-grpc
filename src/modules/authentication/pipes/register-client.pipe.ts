import { Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class RegisterClientPipe implements PipeTransform {
  transform(value: any) {
    return {
      ...value,
      createdBy: '',
      createdAt: new Date().toISOString(),
      updatedBy: '',
      updatedAt: '',
    };
  }
}
