import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as mongooseSchema } from 'mongoose';
import { User } from '../../users/entities/user.entity';
import { Recharge } from '../../recharges/entities/recharge.entity';

export type WalletDocument = Wallet & Document;

@Schema()
export class Wallet {
  _id: string;

  @Prop()
  balance: number;

  @Prop()
  createdAt: string;

  @Prop()
  updatedAt: string;

  @Prop()
  createdBy: string;

  @Prop()
  updatedBy: string;

  @Prop({ type: mongooseSchema.Types.ObjectId, ref: 'User' })
  user: User;

  @Prop({ type: [{ type: mongooseSchema.Types.ObjectId, ref: 'Recharge' }] })
  recharges: Recharge[];
}

export const WalletSchema = SchemaFactory.createForClass(Wallet);
