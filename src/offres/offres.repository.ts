import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateOffreDto } from 'src/dto/CreateOffre.dto';
import { UpdateOffreDto } from 'src/dto/UpdateOffre.dto';
import { OffreDocument } from 'src/entities/offre.schema';

@Injectable()
export class OffresRepository {
  constructor(
    @InjectModel(OffreDocument.name)
    private readonly offreModel: Model<OffreDocument>,
  ) {}

  async create(createOffreDto: CreateOffreDto) {
    const offre = new this.offreModel(createOffreDto);
    return offre.save();
  }

  async findAll() {
    return this.offreModel.find().exec();
  }

  async findOffresByService(serviceId: string) {
    return this.offreModel.find({ serviceId }).exec();
  }

  async update(offreId: string, updateOffreDto: UpdateOffreDto) {
    return this.offreModel.findByIdAndUpdate(
      offreId,
      { ...updateOffreDto },
      { new: true },
    );
  }

  async delete(offreId: string) {
    return this.offreModel.findByIdAndDelete(offreId);
  }
}
