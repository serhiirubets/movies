import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { MovieModel } from './movie.model';
import { FindMovieDto } from './dto/find-movie.dto';
import { JwtAuthGuard } from '../auth/guards/jwt.guard';
import { UserEmail } from '../decorators/user-email.decorator';

@Controller('movies')
export class MoviesController {
  @Post('create')
  async create(@Body() dto: Omit<MovieModel, '_id'>) {}

  @Get(':id')
  async get(@Param('id') id: string) {}

  @UseGuards(JwtAuthGuard)
  @Get('')
  async getAll(@UserEmail() email: string) {
    return ['test'];
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() dto: MovieModel) {}

  @Delete(':id')
  async delete(@Param('id') id: string) {}

  @HttpCode(200)
  @Post()
  async find(@Body() dto: FindMovieDto) {}
}
