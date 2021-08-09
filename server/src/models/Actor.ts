import {Table, Column, Model, HasMany, CreatedAt, UpdatedAt} from 'sequelize-typescript';


@Table
export class Actor extends Model {
    @Column
    name: string;

    @Column
    pictureUrl: string;

    @CreatedAt
    creationDate: Date;

    @UpdatedAt
    updatedOn: Date;
}