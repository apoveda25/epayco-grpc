import { Injectable, Scope, Inject, PipeTransform } from '@nestjs/common';
import { REQUEST } from '@nestjs/core';
import { Request } from 'express';

@Injectable({ scope: Scope.REQUEST })
export class UpdateResourcePipe implements PipeTransform {
  constructor(@Inject(REQUEST) private request: Request) {}

  transform(value: any) {
    return {
      ...value,
      updatedAt: new Date().toISOString(),
    };
  }
}
