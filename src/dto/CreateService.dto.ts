import {
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsString,
  MinLength,
} from 'class-validator';

export class CreateServiceDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(5)
  serviceName: string;

  @IsString()
  @IsNotEmpty()
  imageLink: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(5)
  title: string;

  @IsNumber()
  @IsNotEmpty()
  price: number;

  @IsNumber()
  @IsNotEmpty()
  duration: number;

  @IsString()
  @IsNotEmpty()
  @MinLength(5)
  description: string;

  @IsString()
  @IsNotEmpty()
  @IsEmail()
  userEmail: string;
}
