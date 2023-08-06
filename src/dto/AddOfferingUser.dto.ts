import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class AddOfferingUserDto {
  @IsString()
  @IsNotEmpty()
  serviceId: string;

  @IsString()
  @IsEmail()
  @IsNotEmpty()
  userEmail: string;
}
