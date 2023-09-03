/* eslint-disable */
import { UpdatePublicationDto } from './../dto/UpdatePublication.dto';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreatePublicationDto } from 'src/dto/CreatePublication.dto';
import { PublicationDocument } from 'src/entities/publication.schema';

@Injectable()
export class PublicationsRepository {
  constructor(
    @InjectModel(PublicationDocument.name)
    private readonly publicationModel: Model<PublicationDocument>,
  ) {}

  async create(createPublicationDto: CreatePublicationDto) {
    const publication = new this.publicationModel(createPublicationDto);
    return publication.save();
  }

  async findAll() {
    return this.publicationModel.find().exec();
  }


  async findPublicationsByUser(userId: string) {
    return this.publicationModel.find({ userId }).exec();
  }

  async update(
    publicationId: string,
    updatePublicationDto: UpdatePublicationDto,
  ) {
    return this.publicationModel.findByIdAndUpdate(
      publicationId,
      { ...updatePublicationDto },
      { new: true },
    );
  }

  async delete(publicationId: string) {
    return this.publicationModel.findByIdAndDelete(publicationId);
  }
}
