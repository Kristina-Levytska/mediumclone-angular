import { ArticlesInterface } from './articles.interface';

export type ArticleInputInterface = Pick<
  ArticlesInterface,
  'title' | 'description' | 'body' | 'tagList' | 'slug'
>;
