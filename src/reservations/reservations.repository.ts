import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ReservationDocument } from '../entities/reservation.schema';
import { Model } from 'mongoose';
import { CreateReservationDto } from '../dto/CreateReservation.dto';
import { ReservationNotFoundException } from 'src/exceptions/ReservationNotFoundException';
import { UpdateReservationDto } from 'src/dto/UpdateReservation.dto';

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
      status: 'pending',
      dateDeb: dateDebObj.toLocaleDateString(),
      dateFin: dateFinObj.toLocaleDateString(),
    });

    return reservation.save();
  }

  async findAll(): Promise<ReservationDocument[]> {
    return this.reservationModel.find().exec();
  }

  async acceptReservation(reservationId: string): Promise<ReservationDocument> {
    const reservation = await this.reservationModel.findById(reservationId);
    if (!reservation) {
      throw new ReservationNotFoundException(reservationId);
    }
    reservation.status = 'accepted';
    return reservation.save();
  }

  async updateReservation(
    reservationId: string,
    updateReservationDto: UpdateReservationDto,
  ) {
    const { dateDeb, duration, ...otherProps } = updateReservationDto;

    const dateDebObj = new Date(dateDeb);
    const dateFinObj = new Date(dateDeb);
    dateFinObj.setDate(dateDebObj.getDate() + duration);

    return this.reservationModel.findByIdAndUpdate(
      reservationId,
      {
        ...otherProps,
        dateDeb: dateDebObj.toLocaleDateString(),
        dateFin: dateFinObj.toLocaleDateString(),
      },
      { new: true },
    );
  }

  async declineReservation(
    reservationId: string,
  ): Promise<ReservationDocument> {
    const reservation = await this.reservationModel.findById(reservationId);
    if (!reservation) {
      throw new ReservationNotFoundException(reservationId);
    }
    reservation.status = 'declined';
    return reservation.save();
  }

  async deleteReservation(reservationId: string): Promise<ReservationDocument> {
    return this.reservationModel.findByIdAndDelete(reservationId);
  }
}
