import {Injectable} from '@nestjs/common';
import {ReviewModel} from './review.model';
import {DocumentType, ModelType} from '@typegoose/typegoose/lib/types';
import {CreateReviewDto} from './dto/create-review.dto';
import {InjectModel} from 'nestjs-typegoose';
import {Types} from 'mongoose';

@Injectable()
export class ReviewsService {
  constructor(@InjectModel(ReviewModel) private readonly reviewModel: ModelType<ReviewModel>) {
  }

  async create(dto: CreateReviewDto): Promise<DocumentType<ReviewModel>> {
    return this.reviewModel.create(dto);
  }

  async delete(id: string): Promise<DocumentType<ReviewModel> | null> {
    return this.reviewModel.findByIdAndDelete(id).exec();
  }

  async findByMovieId(movieId: string): Promise<DocumentType<ReviewModel>[]> {
    // Types.ObjectId(movieId)
    return this.reviewModel.find({ movieId }).exec()
  }

  async deleteByMovieId(movieId: string) {
    // Types.ObjectId(movieId)
    return this.reviewModel.deleteMany({ movieId }).exec();
  }
}
