import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ versionKey: false, collection: 'services' })
export class ServiceDocument extends Document {
  @Prop({ required: true })
  serviceName: string;

  @Prop()
  usersOfferingService: string[];
}

export const ServiceSchema = SchemaFactory.createForClass(ServiceDocument);
