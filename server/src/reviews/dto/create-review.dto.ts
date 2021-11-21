import { IsNumber, IsString, Max, Min } from 'class-validator';

export class CreateReviewDto {
  @IsString()
  userId: string;

  @IsString()
  description: string;

  @IsNumber()
  @Max(5)
  @Min(1)
  rating: number;

  @IsString()
  movieId: string;
}
