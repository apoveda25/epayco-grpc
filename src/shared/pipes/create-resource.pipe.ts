import { Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class CreateResourcePipe implements PipeTransform {
  transform(value: any) {
    return {
      ...value,
      createdAt: new Date().toISOString(),
      updatedBy: '',
      updatedAt: '',
    };
  }
}
