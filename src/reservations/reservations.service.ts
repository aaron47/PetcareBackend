import { Injectable } from '@nestjs/common';
import { ReservationsRepository } from './reservations.repository';
import { CreateReservationDto } from '../dto/CreateReservation.dto';

@Injectable()
export class ReservationsService {
  constructor(
    private readonly reservationsRepository: ReservationsRepository,
  ) {}

  async createReservation(createReservationDto: CreateReservationDto) {
    return this.reservationsRepository.create(createReservationDto);
  }
}
