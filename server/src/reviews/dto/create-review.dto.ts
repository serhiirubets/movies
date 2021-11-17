import {IsNumber, IsString, Max, Min} from 'class-validator';

export class CreateReviewDto {
  @IsString()
  userName: string;

  @IsString()
  title: string;

  @IsString()
  description: string;

  @IsNumber()
  @Max(5)
  @Min(1)
  rating: number;

  @IsString()
  movieId: string
}
