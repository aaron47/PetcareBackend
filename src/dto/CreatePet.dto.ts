import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreatePetDto {
  @IsString()
  @IsNotEmpty()
  petName: string;

  @IsNumber()
  @IsNotEmpty()
  petAge: number;

  @IsString()
  petImageLink: string;

  @IsString()
  @IsNotEmpty()
  petType: string;

  @IsString()
  @IsNotEmpty()
  petBreed: string;

  @IsString()
  @IsNotEmpty()
  petGender: string;

  @IsString()
  @IsNotEmpty()
  petBloodPressure: string;

  @IsString()
  @IsNotEmpty()
  petBoneDensity: string;

  @IsNumber()
  @IsNotEmpty()
  petWeight: number;

  @IsString()
  @IsNotEmpty()
  petOwner: string;
}
