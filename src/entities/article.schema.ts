import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ versionKey: false, collection: 'articles' })
export class ArticleDocument extends Document {
  @Prop({ required: true })
  details: string;

  @Prop({ required: true })
  type: string;

  @Prop({ required: true })
  imageLink: string;

  @Prop({ required: true })
  userId: string;
}

export const ArticleSchema = SchemaFactory.createForClass(ArticleDocument);
