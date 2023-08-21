import { HttpException, HttpStatus } from '@nestjs/common';

export class ReservationNotFoundException extends HttpException {
  constructor(reservationId: string) {
    super(
      `Reservation with id ${reservationId} not found`,
      HttpStatus.NOT_FOUND,
    );
  }
}
