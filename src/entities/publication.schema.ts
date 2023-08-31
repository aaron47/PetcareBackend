import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ versionKey: false, collection: 'publications' })
export class PublicationDocument extends Document {
  @Prop({ required: true })
  titre: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  image: string;

  @Prop()
  nbrLikes: number;
}

export const PublicationSchema =
  SchemaFactory.createForClass(PublicationDocument);
