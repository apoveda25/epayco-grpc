import { Injectable, Scope, PipeTransform } from '@nestjs/common';
import { ramdonCode } from '../../../shared/helpers/generate-code';

@Injectable({ scope: Scope.REQUEST })
export class CodeGeneratePipe implements PipeTransform {
  transform(value: any) {
    return {
      ...value,
      code: ramdonCode(6),
    };
  }
}
