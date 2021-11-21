import { IsNumber, IsOptional, IsString } from 'class-validator';

export class FindMovieDto {
  @IsOptional()
  @IsString()
  genre?: string;

  @IsOptional()
  @IsNumber()
  limit?: number;

  @IsOptional()
  @IsString()
  searchedTxt?: string;
}
