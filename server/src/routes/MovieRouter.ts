import {Request, Response} from 'express';
import {Movie} from '../models/Movie';

const express = require('express');
const router = express.Router();

router.get('/', async (req: Request, res: Response) => {
  try {
    const movies = await Movie.find({});
    return res.json(movies);
  } catch (e) {
    return res.status(500).send(e.message);
  }
});

router.post('/', async (req: Request, res: Response) => {
  try {
    const movies = await Movie.create(req.body);
    return res.json(movies);
  } catch (e) {
    return res.status(500).send(e.message);
  }
});

export {router as MovieRouter};
