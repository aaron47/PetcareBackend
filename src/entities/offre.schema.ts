import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ versionKey: false, collection: 'offres' })
export class OffreDocument extends Document {
  @Prop({ required: true })
  titre: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  prix: number;

  @Prop({ required: true })
  serviceId: string;
}

export const OffreSchema = SchemaFactory.createForClass(OffreDocument);
