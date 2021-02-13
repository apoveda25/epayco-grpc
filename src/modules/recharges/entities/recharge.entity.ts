import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as mongooseSchema } from 'mongoose';
import { Wallet } from '../../wallets/entities/wallet.entity';

export type RechargeDocument = Recharge & Document;

@Schema()
export class Recharge {
  _id: string;

  @Prop()
  mount: number;

  @Prop()
  createdAt: string;

  @Prop()
  updatedAt: string;

  @Prop()
  createdBy: string;

  @Prop()
  updatedBy: string;

  @Prop({ type: mongooseSchema.Types.ObjectId, ref: 'Wallet' })
  wallet: Wallet;
}

export const RechargeSchema = SchemaFactory.createForClass(Recharge);
