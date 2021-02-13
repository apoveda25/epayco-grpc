import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { RechargesService } from './recharges.service';
import { RechargesController } from './recharges.controller';
import { Recharge, RechargeSchema } from './entities/recharge.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Recharge.name, schema: RechargeSchema },
    ]),
  ],
  controllers: [RechargesController],
  providers: [RechargesService],
})
export class RechargesModule {}
