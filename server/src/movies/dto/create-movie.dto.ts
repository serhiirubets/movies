import { IsArray, IsNumber, IsString } from 'class-validator';

export class CreateMovieDto {
  @IsString()
  image: string;
  @IsString()
  title: string;
  @IsString()
  description: string;
  @IsString()
  year: string;
  @IsString()
  country: string;
  @IsNumber()
  duration: number;

  @IsArray()
  @IsString({ each: true })
  genres: string[];

  @IsArray()
  @IsString({ each: true })
  actors: string[];
}
