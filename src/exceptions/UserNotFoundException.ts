import { HttpException, HttpStatus } from '@nestjs/common';

export class UserNotFoundException extends HttpException {
  constructor() {
    super('User Not Found | Invalid Credentials', HttpStatus.NOT_FOUND);
  }
}
