import { IsNotEmpty, IsString, MinLength } from 'class-validator';

export class CreateServiceDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(5)
  serviceName: string;
}
