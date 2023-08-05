import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ versionKey: false, collection: 'pets' })
export class PetDocument extends Document {
  @Prop({ required: true })
  petName: string;

  @Prop({ required: true })
  petAge: number;

  @Prop()
  petImageLink: string;

  @Prop({ required: true })
  petType: string;

  @Prop({ required: true })
  petBreed: string;

  @Prop({ required: true })
  petGender: string;

  @Prop({ required: true })
  petBloodPressure: string;

  @Prop({ required: true })
  petBoneDensity: string;

  @Prop({ required: true })
  petWeight: number;

  @Prop({ required: true })
  petOwner: string;
}

export const PetSchema = SchemaFactory.createForClass(PetDocument);
