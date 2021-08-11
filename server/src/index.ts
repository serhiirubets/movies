import express, {Application, Request, Response, NextFunction} from 'express';
import cors from 'cors';
import {Mongoose} from "mongoose";
import {connection} from "./setup/db";
import config from "../config";

const app: Application = express();

app.use(cors());

// Application routing
app.use('/', (req: Request, res: Response, next: NextFunction) => {
  res.status(200).send({data: 'Hello from Ornio AS'});
});

connection.then((data: Mongoose) => {
  app.listen(config.port, () => console.log(`Server is listening on port ${port}!`));
})
