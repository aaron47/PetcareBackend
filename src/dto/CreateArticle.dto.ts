import { IsNotEmpty, IsString } from 'class-validator';

export class CreateArticleDto {
  @IsString()
  @IsNotEmpty()
  details: string;

  @IsString()
  @IsNotEmpty()
  type: string;

  @IsString()
  @IsNotEmpty()
  imageLink: string;

  @IsString()
  @IsNotEmpty()
  userId: string;
}
