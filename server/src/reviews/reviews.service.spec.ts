import { Test, TestingModule } from '@nestjs/testing';
import { Types } from 'mongoose';
import { getModelToken } from 'nestjs-typegoose';
import { ReviewsService } from './reviews.service';

describe('ReviewsService', () => {
	let service: ReviewsService;

	const exec = { exec: jest.fn() };
	const reviewRepositoryFactory = () => ({
		find: () => exec
	});

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			providers: [
        ReviewsService,
				{ useFactory: reviewRepositoryFactory, provide: getModelToken('ReviewModel') }
			],
		}).compile();

		service = module.get<ReviewsService>(ReviewsService);
	});

	it('should be defined', () => {
		expect(service).toBeDefined();
	});

	it('findByMovieId working', async () => {
		const id = new Types.ObjectId().toHexString();
		reviewRepositoryFactory().find().exec.mockReturnValueOnce([{ movieId: id }]);
		const res = await service.findByMovieId(id);
		expect(res[0].movieId).toBe(id);
	});
});
