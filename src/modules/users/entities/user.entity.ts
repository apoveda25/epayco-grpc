import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

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
  cellphone: string;

  @Prop()
  createdAt: string;

  @Prop()
  updatedAt: string;

  @Prop()
  createdBy: string;

  @Prop()
  updatedBy: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
