import { Base, TimeStamps } from '@typegoose/typegoose/lib/defaultClasses';
import { index, prop } from '@typegoose/typegoose';

export interface MovieModel extends Base {}
@index({ title: 'text', description: 'text' })
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

  @prop({ type: () => [String] })
  reviews: string[];

  @prop({ type: () => [String] })
  genres: string[];

  @prop({ type: () => [String] })
  actors: string[];
}
