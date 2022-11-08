import { Observable, of } from 'rxjs';
import { ALL_ARTICLES_MOCK } from 'src/app/shared/modules/feed/services/feed.service.mock';
import { ArticleInputInterface } from 'src/app/shared/types/article-input.interface';
import { ArticlesInterface } from 'src/app/shared/types/articles.interface';

export class CreateArticleServiceMock {
  createArticle(input: ArticleInputInterface): Observable<ArticlesInterface> {
    const newArticle: ArticlesInterface = { ...ALL_ARTICLES_MOCK[0], ...input };

    ALL_ARTICLES_MOCK.push(newArticle);

    return of(newArticle);
  }
}
