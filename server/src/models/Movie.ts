import {Table, Column, Model, HasMany, DataType, ForeignKey, CreatedAt, UpdatedAt} from 'sequelize-typescript';
import {Actor} from "./Actor";

export enum MovieType {
    film = 'film',
    serial = 'serial',
    trailer = 'trailer'
}

@Table
export class Movie extends Model {
    @Column(DataType.TEXT)
    name: string
    
    @Column(DataType.TEXT)
    slug: string
    
    @Column(DataType.TEXT)
    description: string

    @Column(DataType.DATE)
    date: Date
    
    @Column({ type: DataType.ARRAY(DataType.STRING) })
    genre: string[]

    @ForeignKey(() => Actor)
    @Column({ primaryKey: true, allowNull: false, unique: true })
    actors: string
    
    @Column(DataType.NUMBER)
    rating: number

    @Column(DataType.NUMBER)
    duration: number
    
    @Column(DataType.ENUM(MovieType.film, MovieType.serial, MovieType.trailer))
    type: MovieType

    @Column(DataType.TEXT)
    country: string

    @CreatedAt
    creationDate: Date;

    @UpdatedAt
    updatedOn: Date;
}