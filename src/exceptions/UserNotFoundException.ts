import { HttpException, HttpStatus } from '@nestjs/common';

export class UserNotFoundException extends HttpException {
  constructor() {
    super('Invalid Credentials', HttpStatus.NOT_FOUND);
  }
}
