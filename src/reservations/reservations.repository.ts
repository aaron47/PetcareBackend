import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ReservationDocument } from '../entities/reservation.schema';
import { Model } from 'mongoose';
import { CreateReservationDto } from '../dto/CreateReservation.dto';

@Injectable()
export class ReservationsRepository {
  constructor(
    @InjectModel(ReservationDocument.name)
    private readonly reservationModel: Model<ReservationDocument>,
  ) {}

  async create(
    createReservationDto: CreateReservationDto,
  ): Promise<ReservationDocument> {
    const { dateDeb, duration, ...otherProps } = createReservationDto;

    const dateDebObj = new Date(dateDeb);
    const dateFinObj = new Date(dateDeb);
    dateFinObj.setDate(dateDebObj.getDate() + duration);

    const reservation = new this.reservationModel({
      ...otherProps,
      dateDeb: dateDebObj,
      dateFin: dateFinObj,
    });

    return reservation.save();
  }
}
