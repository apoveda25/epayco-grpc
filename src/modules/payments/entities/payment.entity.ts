import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as mongooseSchema } from 'mongoose';
import { Wallet } from '../../wallets/entities/wallet.entity';

export type PaymentDocument = Payment & Document;

@Schema()
export class Payment {
  _id: string;

  @Prop()
  mount: number;

  @Prop()
  verified: boolean;

  @Prop()
  code: string;

  @Prop()
  sesionId: string;

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

export const PaymentSchema = SchemaFactory.createForClass(Payment);
