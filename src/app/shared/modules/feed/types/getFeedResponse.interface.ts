import { ArticlesInterface } from 'src/app/shared/types/articles.interface';

export interface GetFeedResponseInterface {
  articles: ArticlesInterface[];
  articlesCount: number;
}
