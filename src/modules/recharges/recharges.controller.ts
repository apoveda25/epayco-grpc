import { Controller, UsePipes, ValidationPipe } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { RechargesService } from './recharges.service';
import { CreateRechargeDto } from './dto/create-recharge.dto';
import { UpdateRechargeDto } from './dto/update-recharge.dto';
import { CreateResourcePipe } from '../../shared/pipes/create-resource.pipe';
import { UpdateResourcePipe } from '../../shared/pipes/update-resource.pipe';
import { RechargeDocument } from './entities/recharge.entity';
import { SearchRechargeDto } from './dto/search-recharge.dto';
import { SearchRechargesDto } from './dto/search-recharges.dto';
import { FindRechargeDto } from './dto/find-recharge.dto';
import { RemoveRechargeDto } from './dto/remove-recharge.dto';

@Controller()
export class RechargesController {
  constructor(private readonly rechargesService: RechargesService) {}

  @UsePipes(CreateResourcePipe, ValidationPipe)
  @GrpcMethod('RechargesService', 'create')
  async create(data: CreateRechargeDto): Promise<RechargeDocument> {
    return await this.rechargesService.create(data);
  }

  @UsePipes(ValidationPipe)
  @GrpcMethod('RechargesService', 'search')
  async search(data: SearchRechargeDto): Promise<SearchRechargesDto> {
    return await this.rechargesService.search(data);
  }

  @UsePipes(ValidationPipe)
  @GrpcMethod('RechargesService', 'find')
  async find(data: FindRechargeDto): Promise<RechargeDocument> {
    return await this.rechargesService.find(data);
  }

  @UsePipes(UpdateResourcePipe, ValidationPipe)
  @GrpcMethod('RechargesService', 'update')
  async update(data: UpdateRechargeDto): Promise<RechargeDocument> {
    return await this.rechargesService.update(data);
  }

  @UsePipes(ValidationPipe)
  @GrpcMethod('RechargesService', 'remove')
  async remove(data: RemoveRechargeDto): Promise<RechargeDocument> {
    return await this.rechargesService.remove(data);
  }
}
