import { Injectable } from '@nestjs/common';
import { ReservationsRepository } from './reservations.repository';
import { CreateReservationDto } from '../dto/CreateReservation.dto';
import { ReservationDocument } from 'src/entities/reservation.schema';
import { UpdateReservationDto } from 'src/dto/UpdateReservation.dto';

@Injectable()
export class ReservationsService {
  constructor(
    private readonly reservationsRepository: ReservationsRepository,
  ) {}

  async createReservation(
    createReservationDto: CreateReservationDto,
  ): Promise<ReservationDocument> {
    return this.reservationsRepository.create(createReservationDto);
  }

  async findAll(): Promise<ReservationDocument[]> {
    return this.reservationsRepository.findAll();
  }

  async acceptReservation(reservationId: string): Promise<ReservationDocument> {
    return this.reservationsRepository.acceptReservation(reservationId);
  }

  async declineReservation(
    reservationId: string,
  ): Promise<ReservationDocument> {
    return this.reservationsRepository.declineReservation(reservationId);
  }

  async updateReservation(
    reservationId: string,
    updateReservationDto: UpdateReservationDto,
  ) {
    return this.reservationsRepository.updateReservation(
      reservationId,
      updateReservationDto,
    );
  }

  async deleteReservation(reservationId: string) {
    return this.reservationsRepository.deleteReservation(reservationId);
  }
}
