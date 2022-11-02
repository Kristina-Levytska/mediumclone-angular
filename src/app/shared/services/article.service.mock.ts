import { Observable, of } from 'rxjs';
import { ALL_ARTICLES_MOCK } from '../modules/feed/services/feed.service.mock';
import { ArticlesInterface } from '../types/articles.interface';
import { GetArticleResponseInterface } from '../types/get-article-response.interface';

const getArticleMock = (slugToFind: string): GetArticleResponseInterface => ({
  article: ALL_ARTICLES_MOCK.find(
    ({ slug }) => slug === slugToFind
  ) as ArticlesInterface,
});

export class ArticleServiceMock {
  getArticle(slug: string): Observable<GetArticleResponseInterface> {
    return of(getArticleMock(slug));
  }
}
