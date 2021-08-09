import {Movie} from "./src/models/Movie";
import {Actor} from "./src/models/Actor";
import {SequelizeOptions} from "sequelize-typescript";

export default {
    database: 'dfdjt3osmqo1k5',
    dialect: 'postgres',
    username: 'jdfntojsunlpdj',
    password: 'f37b1efe629c9a59b75eb8fdafdcb7603fe9efde9e09ebb7757d50dd7ea157c7',
    host: 'ec2-34-197-105-186.compute-1.amazonaws.com',
    models: [Movie, Actor] // or [Player, Team],
} as SequelizeOptions