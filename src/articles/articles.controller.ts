import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { ArticlesRepository } from './articles.repository';
import { CreateArticleDto } from 'src/dto/CreateArticle.dto';
import { UpdateArticleDto } from 'src/dto/UpdateArticle.dto';

@Controller('articles')
export class ArticlesController {
  constructor(private readonly articlesRepository: ArticlesRepository) {}

  @Post('create')
  create(@Body() createArticleDto: CreateArticleDto) {
    return this.articlesRepository.create(createArticleDto);
  }

  @Get()
  findAll() {
    return this.articlesRepository.findAll();
  }

  @Get('user/:id')
  getUserArticles(@Param('id') id: string) {
    return this.articlesRepository.findUserArticles(id);
  }

  @Put(':id/update')
  update(
    @Param('id') articleId: string,
    @Body() updateArticleDto: UpdateArticleDto,
  ) {
    return this.articlesRepository.update(articleId, updateArticleDto);
  }

  @Delete(':id/delete')
  delete(@Param('id') articleId: string) {
    return this.articlesRepository.delete(articleId);
  }
}
