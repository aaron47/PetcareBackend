import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ versionKey: false, collection: 'reservations' })
export class ReservationDocument extends Document {
  @Prop({ required: true })
  ownerId: string;

  @Prop({ required: true })
  sitterId: string;

  @Prop({ required: true })
  petId: string;

  @Prop({ required: true })
  serviceId: string;

  @Prop({ required: true })
  createdAt = new Date().toLocaleDateString();

  @Prop()
  status = 'pending';

  @Prop({ required: true })
  duration: string;

  @Prop({ required: true })
  budget: number;
}

export const ReservationSchema =
  SchemaFactory.createForClass(ReservationDocument);
