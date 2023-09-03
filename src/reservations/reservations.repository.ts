import { ReservationDocument } from './../entities/reservation.schema';
import { ServicesRepository } from './../services/services.repository';
import { PetsRepository } from './../pets/pets.repository';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateReservationDto } from '../dto/CreateReservation.dto';
import { ReservationNotFoundException } from 'src/exceptions/ReservationNotFoundException';
import { UpdateReservationDto } from 'src/dto/UpdateReservation.dto';
import { UsersRepository } from 'src/users/users.repository';

@Injectable()
export class ReservationsRepository {
  constructor(
    @InjectModel(ReservationDocument.name)
    private readonly reservationModel: Model<ReservationDocument>,
    private readonly petsRepository: PetsRepository,
    private readonly servicesRepository: ServicesRepository,
    private readonly usersRepository: UsersRepository,
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

  async findReservationsByUserId(): Promise<any[]> {
    const modifiedReservations = [];
    const reservations = await this.reservationModel.find().exec();

    for (const r of reservations) {
      const user = await this.usersRepository.findOneById(r.sitterId);
      const service = await this.servicesRepository.findServiceById(
        r.serviceId,
      );
      const pet = await this.petsRepository.findPetById(r.petId);

      modifiedReservations.push({
        ...r.toObject(),
        user: user.toObject(),
        service: service.toObject(),
        pet: pet.toObject(),
      });
    }

    return modifiedReservations;
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
