import { Module } from '@nestjs/common';
import { MoviesController } from './movies.controller';
import {TypegooseModule} from 'nestjs-typegoose';
import {MovieModel} from './movie.model';
import { MoviesService } from './movies.service';

@Module({
  controllers: [MoviesController],
  imports: [
    TypegooseModule.forFeature([
      {
        typegooseClass: MovieModel,
        schemaOptions: {
          collection: 'Movie'
        }
      }
    ])
  ],
  providers: [MoviesService]
})
export class MoviesModule {}
