import { InjectModel } from '@nestjs/mongoose';
import { UpdateArticleDto } from './../dto/UpdateArticle.dto';
import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { CreateArticleDto } from 'src/dto/CreateArticle.dto';
import { ArticleDocument } from 'src/entities/article.schema';

@Injectable()
export class ArticlesRepository {
  constructor(
    @InjectModel(ArticleDocument.name)
    private readonly articleModel: Model<ArticleDocument>,
  ) {}

  async create(createArticleDto: CreateArticleDto) {
    const article = new this.articleModel(createArticleDto);
    return article.save();
  }

  async findAll() {
    return this.articleModel.find().exec();
  }

  async findUserArticles(userId: string) {
    return this.articleModel.find({ userId }).exec();
  }

  async update(articleId: string, updateArticleDto: UpdateArticleDto) {
    return this.articleModel.findByIdAndUpdate(
      articleId,
      { ...updateArticleDto },
      { new: true },
    );
  }

  async delete(articleId: string) {
    return this.articleModel.findByIdAndDelete(articleId);
  }
}
