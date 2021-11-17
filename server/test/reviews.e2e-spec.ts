import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';
import {CreateReviewDto} from '../src/reviews/dto/create-review.dto';
import { Types, disconnect } from 'mongoose';
import {REVIEW_NOT_FOUND} from '../src/reviews/review.constant';

const movieId = new Types.ObjectId().toHexString();
const mockDto: CreateReviewDto = {
  movieId,
  "userName": "test  34 3user name",
  "title": "test  43 3 title",
  "description": "test 43 4 description",
  "rating": 5,
}

describe('AppController (e2e)', () => {
  let app: INestApplication;
  let createdId: string;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterAll(() => {
    disconnect();
  })

  it('/reviews/create (POST) - Success', () => {
    return request(app.getHttpServer())
      .post('/reviews/create')
      .send(mockDto)
      .expect(201)
      .then(({ body }: request.Response) => {
        createdId = body._id;
        expect(createdId).toBeDefined();
      })
  });
  it('/reviews/create (POST) - Fail', () => {
    return request(app.getHttpServer())
      .post('/reviews/create')
      .send({
        ...mockDto,
        rating: 20,
      })
      .expect(400)
  });

  it('/reviews/byMovieId (GET) - Success', () => {
    return request(app.getHttpServer())
      .get('/reviews/byMovieId/' + movieId)
      .expect(200)
      .then(({ body }: request.Response) => {
        expect(body.length).toBe(1);
      })
  });

  it('/reviews (DELETE) - Success', () => {
    return request(app.getHttpServer())
      .delete('/reviews/' + createdId)
      .expect(200)
  });

  it('/reviews (DELETE) - Fail', () => {
    return request(app.getHttpServer())
      .delete('/reviews/' + new Types.ObjectId().toHexString())
      .expect(404, {
        statusCode: 404,
        message: REVIEW_NOT_FOUND
      })
  });
});
