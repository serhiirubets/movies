import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  NotFoundException,
  Param,
  Patch,
  Post,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { MovieModel } from './movie.model';
import { FindMovieDto } from './dto/find-movie.dto';
import { JwtAuthGuard } from '../auth/guards/jwt.guard';
import { UserEmail } from '../decorators/user-email.decorator';
import { CreateMovieDto } from './dto/create-movie.dto';
import { MoviesService } from './movies.service';
import { PRODUCT_NOT_FOUND_ERROR } from './movies.constants';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('movies')
@Controller('movies')
export class MoviesController {
  constructor(private moviesService: MoviesService) {}

  @UsePipes(new ValidationPipe())
  @Post('create')
  async create(@Body() dto: CreateMovieDto) {
    return this.moviesService.create(dto);
  }

  @Get(':id')
  async get(@Param('id') id: string) {
    const product = this.moviesService.findById(id);

    if (!product) {
      throw new NotFoundException(PRODUCT_NOT_FOUND_ERROR);
    }

    return product;
  }

  @UseGuards(JwtAuthGuard)
  @Get('')
  async getAll(@UserEmail() email: string) {
    return ['test'];
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() dto: MovieModel) {
    const updatedMovie = await this.moviesService.update(id, dto);

    if (!updatedMovie) {
      throw new NotFoundException(PRODUCT_NOT_FOUND_ERROR);
    }

    return updatedMovie;
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    const deletedMovie = await this.moviesService.delete(id);

    if (!deletedMovie) {
      throw new NotFoundException(PRODUCT_NOT_FOUND_ERROR);
    }
  }

  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Post('find')
  async find(@Body() dto: FindMovieDto) {
    return this.moviesService.findWithReviews(dto);
  }
}
