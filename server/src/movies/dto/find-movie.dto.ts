import { IsNumber, IsString } from 'class-validator';

export class FindMovieDto {
  @IsString()
  genre: string;

  @IsNumber()
  limit: number;
}
