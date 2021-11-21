import { Injectable } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { DocumentType, ModelType } from '@typegoose/typegoose/lib/types';
import { MovieModel } from './movie.model';
import { CreateMovieDto } from './dto/create-movie.dto';
import { FindMovieDto } from './dto/find-movie.dto';
import { ReviewModel } from '../reviews/review.model';

@Injectable()
export class MoviesService {
  constructor(
    @InjectModel(MovieModel) private readonly movieModel: ModelType<MovieModel>,
  ) {}

  create(dto: CreateMovieDto): Promise<DocumentType<MovieModel>> {
    return this.movieModel.create(dto);
  }

  findById(id: string): Promise<DocumentType<MovieModel>> {
    return this.movieModel.findById(id).exec();
  }

  findWithReviews(dto: FindMovieDto) {
    return this.movieModel
      .aggregate([
        {
          $match: { genres: dto.genre },
        },
        {
          $sort: { _id: 1 },
        },
        {
          $limit: dto.limit,
        },
        {
          $lookup: {
            from: 'Review',
            localField: '_id',
            foreignField: 'movieId',
            as: 'reviews',
          },
        },
        {
          $addFields: {
            reviewsCount: { $size: '$reviews' },
            reviewsAvg: { $avg: '$reviews.rating' },
            reviews: {
              $function: {
                body: `function (reviews) {
                  reviews.sort((a, b) => {
                    return new Date(b.createdAt) - new Date(a.createdAt);
                  });
                  return reviews;
                }`,
                args: ['$reviews'],
                lang: 'js',
              },
            },
          },
        },
      ])
      .exec() as Promise<
      (MovieModel & {
        review: ReviewModel[];
        reviewCount: number;
        reviewAvg: number;
      })[]
    >;
  }

  delete(id: string): Promise<DocumentType<MovieModel> | null> {
    return this.movieModel.findByIdAndDelete(id).exec();
  }

  update(id: string, dto: CreateMovieDto) {
    return this.movieModel.findByIdAndUpdate(id, dto, { new: true });
  }
}
