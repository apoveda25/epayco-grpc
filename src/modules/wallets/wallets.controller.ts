import { Controller, UsePipes, ValidationPipe } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { WalletsService } from './wallets.service';
import { CreateWalletDto } from './dto/create-wallet.dto';
import { UpdateWalletDto } from './dto/update-wallet.dto';
import { CreateResourcePipe } from '../../shared/create-resource.pipe';
import { WalletDocument } from './entities/wallet.entity';
import { SearchWalletDto } from './dto/search-wallet.dto';
import { SearchWalletsDto } from './dto/search-wallets.dto';
import { FindWalletDto } from './dto/find-wallet.dto';
import { UpdateResourcePipe } from '../../shared/update-resource.pipe';
import { RemoveWalletDto } from './dto/remove-wallet.dto';

@Controller()
export class WalletsController {
  constructor(private readonly walletsService: WalletsService) {}

  @UsePipes(CreateResourcePipe, ValidationPipe)
  @GrpcMethod('WalletsService', 'create')
  async create(data: CreateWalletDto): Promise<WalletDocument> {
    return await this.walletsService.create(data);
  }

  @UsePipes(ValidationPipe)
  @GrpcMethod('WalletsService', 'search')
  async search(data: SearchWalletDto): Promise<SearchWalletsDto> {
    return await this.walletsService.search(data);
  }

  @UsePipes(ValidationPipe)
  @GrpcMethod('WalletsService', 'find')
  async find(data: FindWalletDto): Promise<WalletDocument> {
    return await this.walletsService.find(data);
  }

  @UsePipes(UpdateResourcePipe, ValidationPipe)
  @GrpcMethod('WalletsService', 'update')
  async update(data: UpdateWalletDto): Promise<WalletDocument> {
    return await this.walletsService.update(data);
  }

  @UsePipes(ValidationPipe)
  @GrpcMethod('WalletsService', 'remove')
  async remove(data: RemoveWalletDto): Promise<WalletDocument> {
    return await this.walletsService.remove(data);
  }
}
