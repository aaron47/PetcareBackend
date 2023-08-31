/* eslint-disable */

import { IsNotEmpty, IsString } from 'class-validator';

export class CreateCommentaireDto {
  @IsString()
  @IsNotEmpty()
  commentaire: string;

  @IsString()
  @IsNotEmpty()
  publicationId: string;
}
