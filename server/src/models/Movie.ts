import {Model, Schema, model} from 'mongoose';

export enum MovieType {
  film = 'film',
  serial = 'serial',
  trailer = 'trailer'
}

export enum Genre {
  horror = 'Horror',
  comedy = 'Comedy',
  action = 'Action',
  adventure = 'Adventure',
  animated = 'Animated',
  drama = 'Drama',
  fantasy = 'Fantasy',
  historical = 'Historical',
  thriller = 'Thriller',
}

interface Movie {
  name: string,
  slug: string,
  description: string,
  date: string,
  genre: Genre,
  rating: number,
  duration: number,
  country: string,
  createdAt: Date,
  updatedAt: Date,
  actors: string[],
}

interface MovieModel extends Model<Movie> {

}

function makeRequired(fieldName: string): [true, string] {
  return [true, `${fieldName} is required`];
}

const movieSchema = new Schema<Movie, MovieModel>({
  name: {
    type: String,
    required: makeRequired('Name'),
  },
  slug: String,
  description: {
    type: String,
    required: makeRequired('Description'),
  },
  date: Date,
  genre: {
    type: String,
    enum: Object.values(Genre),
    required: makeRequired('Genre'),
  },
  rating: Number,
  duration: Number,
  country: {
    type: String,
    required: makeRequired('Country'),
  },
  actors: [String],

}, {timestamps: true});

movieSchema.statics = {

};

const Movie = model<Movie, MovieModel>('movies', movieSchema);
export {Movie};
