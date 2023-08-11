import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class UpdateUserAccountStatusDto {
  @IsString()
  @IsEmail()
  userEmail: string;

  @IsString()
  @IsEmail()
  adminEmail: string;

  @IsString()
  @IsNotEmpty()
  status: string;
}
