/* eslint-disable */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ versionKey: false, collection: 'commentaires' })
export class CommentaireDocument extends Document {
  @Prop({ required: true })
  commentaire: string;

  @Prop({ required: true })
  publicationId: string;
}

export const CommentaireSchema =
  SchemaFactory.createForClass(CommentaireDocument);
