import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ versionKey: false, collection: 'users' })
export class UserDocument extends Document {
  @Prop({ required: true })
  fullName: string;

  @Prop({ required: true })
  email: string;

  @Prop({ required: true })
  role: UserRole;

  @Prop({ required: true })
  gender: string;

  @Prop({ required: true })
  phone: string;

  @Prop({ required: true })
  password: string;

  @Prop()
  accountStatus = 'pending';
}

export const UserSchema = SchemaFactory.createForClass(UserDocument);

export enum UserRole {
  ADMIN = 'admin',
  SITTER = 'sitter',
  OWNER = 'owner',
}
