import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as mongooseSchema } from 'mongoose';
import { Wallet } from '../../wallets/entities/wallet.entity';

export type UserDocument = User & Document;

@Schema()
export class User {
  _id: string;

  @Prop()
  document: string;

  @Prop()
  name: string;

  @Prop()
  surname: string;

  @Prop()
  email: string;

  @Prop()
  password: string;

  @Prop()
  cellphone: string;

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

export const UserSchema = SchemaFactory.createForClass(User);
