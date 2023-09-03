import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateReservationDto } from '../dto/CreateReservation.dto';
import { ReservationsService } from './reservations.service';
import { UpdateReservationDto } from 'src/dto/UpdateReservation.dto';

@Controller('reservations')
export class ReservationsController {
  constructor(private readonly reservationsService: ReservationsService) {}

  @Post('create')
  async createReservation(@Body() createReservationDto: CreateReservationDto) {
    return this.reservationsService.createReservation(createReservationDto);
  }

  @Get()
  async findAll() {
    return this.reservationsService.findAllByUserId();
  }

  @Post(':reservationId/accept')
  async acceptReservation(@Param('reservationId') reservationId: string) {
    return this.reservationsService.acceptReservation(reservationId);
  }

  @Post(':reservationId/decline')
  async declineReservation(@Param('reservationId') reservationId: string) {
    return this.reservationsService.declineReservation(reservationId);
  }

  @Post(':reservationId/update')
  async updateReservation(
    @Param('reservationId') reservationId: string,
    @Body() updateReservationDto: UpdateReservationDto,
  ) {
    return this.reservationsService.updateReservation(
      reservationId,
      updateReservationDto,
    );
  }

  @Post(':reservationId/delete')
  async deleteReservation(@Param('reservationId') reservationId: string) {
    return this.reservationsService.deleteReservation(reservationId);
  }
}
