import {Base, TimeStamps} from '@typegoose/typegoose/lib/defaultClasses';
import {prop} from '@typegoose/typegoose';

export interface MovieModel extends Base { }
export class MovieModel extends TimeStamps {
  @prop()
  image: string;

  @prop()
  title: string;

  @prop()
  rating: number;

  @prop()
  description: string;

  @prop()
  year: string;

  @prop()
  country: string;

  @prop()
  duration: number;

  @prop({ type: () => [String]})
  comments: string[];

  @prop({ type: () => [String]})
  genres: string[];

  @prop({ type: () => [String]})
  actors: string[];
}
