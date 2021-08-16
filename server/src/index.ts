import express, {Application, Request, Response, NextFunction} from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import {Mongoose} from 'mongoose';
import {connection} from './setup/db';
import config from '../config';

import {MovieRouter} from './routes/MovieRouter';

const app: Application = express();

app.use(cors());
app.use(bodyParser.json());
app.use('/api/movies', MovieRouter);

// Application routing
app.use('/', (req: Request, res: Response, next: NextFunction) => {
  res.status(200).send({data: 'Hello from Ornio AS'});
});

connection.then((data: Mongoose) => {
  app.listen(config.port, () => console.log(`Server is listening on port ${config.port}!`));
});
