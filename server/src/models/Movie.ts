import * as mongoose from "mongoose";

export enum MovieType {
  film = 'film',
  serial = 'serial',
  trailer = 'trailer'
}

const movieSchema = new mongoose.Schema({
  name: String,
  slug: String,
  description: String,
  date: String,
  genre: String,
  rating: Number,
  duration: Number,
  country: String,
  createdAt: Date,
  updatedAt: Date,
  actors: [String]
});

const Movie = mongoose.model('movies', movieSchema);
export {Movie}
