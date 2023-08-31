import { Module } from '@nestjs/common';
import { ArticlesController } from './articles.controller';
import { ArticlesService } from './articles.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ArticleDocument, ArticleSchema } from 'src/entities/article.schema';
import { ArticlesRepository } from './articles.repository';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: ArticleDocument.name, schema: ArticleSchema },
    ]),
  ],
  controllers: [ArticlesController],
  providers: [ArticlesService, ArticlesRepository],
})
export class ArticlesModule {}
