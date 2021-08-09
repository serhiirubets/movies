import express, { Application, Request, Response, NextFunction } from 'express';
import cors from 'cors';
import { Sequelize } from 'sequelize-typescript'
import {Movie} from "./models/Movie";
import {Actor} from "./models/Actor";

const sequelize = new Sequelize({
    database: 'dfdjt3osmqo1k5',
    dialect: 'postgres',
    username: 'jdfntojsunlpdj',
    password: 'f37b1efe629c9a59b75eb8fdafdcb7603fe9efde9e09ebb7757d50dd7ea157c7',
    host: 'ec2-34-197-105-186.compute-1.amazonaws.com',
    models: [Movie, Actor] // or [Player, Team],
});

// Boot express
const app: Application = express();
const port = 8888;

app.use(cors());

// Application routing
app.use('/', (req: Request, res: Response, next: NextFunction ) => {
    res.status(200).send({data: 'Hello from Ornio AS'});
});

// Start server
app.listen(port, () => console.log(`Server is listening on port ${port}!`));