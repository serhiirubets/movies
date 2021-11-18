import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';
import { disconnect } from 'mongoose';
import { AuthDto } from '../src/auth/dto/auth.dto';
import {
  USER_NOT_FOUND_ERROR,
  WRONG_PASSWORD_ERROR,
} from '../src/auth/auth.constants';

const loginDto: AuthDto = {
  login: 'test',
  password: 'test',
};

describe('AuthController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterAll(() => {
    disconnect();
  });

  it('/auth/login (POST) - Success', () => {
    return request(app.getHttpServer())
      .post('/auth/login/')
      .send(loginDto)
      .expect(200)
      .then(({ body }: request.Response) => {
        const token = body.access_token;
        expect(token).toBeDefined();
      });
  });

  it('/auth/login (POST) - Fail', () => {
    return request(app.getHttpServer())
      .post('/auth/login/')
      .send({ ...loginDto, password: 'Wrong password' })
      .expect(401, {
        statusCode: 401,
        message: WRONG_PASSWORD_ERROR,
        error: 'Unauthorized',
      });
  });

  it('/auth/login (POST) - Fail', () => {
    return request(app.getHttpServer())
      .post('/auth/login/')
      .send({ ...loginDto, login: 'Wrong login' })
      .expect(401, {
        statusCode: 401,
        message: USER_NOT_FOUND_ERROR,
        error: 'Unauthorized',
      });
  });
});
