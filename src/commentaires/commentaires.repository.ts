/* eslint-disable */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCommentaireDto } from 'src/dto/CreateCommentaire.dto';
import { CommentaireDocument } from 'src/entities/commentaire.schema';

@Injectable()
export class CommentairesRepository {
  constructor(
    @InjectModel(CommentaireDocument.name)
    private readonly commentaireModel: Model<CommentaireDocument>,
  ) {}

  create(
    createCommentaireDto: CreateCommentaireDto,
  ): Promise<CommentaireDocument> {
    const newCommentaire = new this.commentaireModel(createCommentaireDto);
    return newCommentaire.save();
  }

  findAll(): Promise<CommentaireDocument[]> {
    return this.commentaireModel.find().exec();
  }

  findAllByPublicationId(
    publicationId: string,
  ): Promise<CommentaireDocument[]> {
    return this.commentaireModel.find({ publicationId }).exec();
  }

  findById(id: string): Promise<CommentaireDocument> {
    return this.commentaireModel.findById(id).exec();
  }

  update(id: string, commentaire: string): Promise<CommentaireDocument> {
    return this.commentaireModel
      .findByIdAndUpdate(id, { commentaire }, { new: true })
      .exec();
  }

  delete(id: string): Promise<CommentaireDocument> {
    return this.commentaireModel.findByIdAndDelete(id).exec();
  }
}
