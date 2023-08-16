import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ versionKey: false, collection: 'reservations' })
export class ReservationDocument extends Document {
  @Prop({ required: true })
  sitterId: string;

  @Prop({ required: true })
  petId: string;

  @Prop({ required: true })
  serviceId: string;

  @Prop({ required: true })
  type: string;

  @Prop({ required: true })
  dateDeb: string;

  @Prop({ required: true })
  dateFin: string;

  @Prop({ required: false })
  status: string;

  @Prop({ required: true })
  prixTotal: number;
}

export const ReservationSchema =
  SchemaFactory.createForClass(ReservationDocument);
