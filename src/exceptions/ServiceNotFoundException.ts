import { HttpException, HttpStatus } from '@nestjs/common';

export class ServiceNotFoundException extends HttpException {
  constructor() {
    super('Service not found with that id', HttpStatus.NOT_FOUND);
  }
}
