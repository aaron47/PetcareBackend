import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ versionKey: false, collection: 'messages' })
export class MessageDocument extends Document {
  @Prop({ required: true })
  message: string;

  @Prop({ required: true })
  date: string;

  @Prop({ required: true })
  expediteur: string;

  @Prop({ required: true })
  reservationId: string;
}

export const MessageSchema = SchemaFactory.createForClass(MessageDocument);
