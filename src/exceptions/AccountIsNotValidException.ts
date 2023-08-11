import { HttpException } from '@nestjs/common';

export class AccountIsNotValidException extends HttpException {
  constructor() {
    super(
      'Your account is currently in a pending or rejected state, please try again at a later time',
      400,
    );
  }
}
