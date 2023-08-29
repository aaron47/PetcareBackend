import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ versionKey: false, collection: 'services' })
export class ServiceDocument extends Document {
  @Prop({ required: true })
  serviceName: string;

  @Prop({ required: true })
  imageLink: string;

  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  price: number;

  @Prop({ required: true })
  duration: number;

  @Prop({ required: true })
  description: string;

  @Prop()
  usersOfferingService: string[];
}

export const ServiceSchema = SchemaFactory.createForClass(ServiceDocument);
