import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ArticleInputInterface } from 'src/app/shared/types/article-input.interface';
import { ArticlesInterface } from 'src/app/shared/types/articles.interface';
import { SaveArticleResponseInterface } from 'src/app/shared/types/save-article-response.interface';
import { environment } from 'src/environments/environment';
import { CreateArticleServiceMock } from './create-article.service.mock';

const mockService = new CreateArticleServiceMock();

@Injectable({
  providedIn: 'root',
})
export class CreateArticleService {
  constructor(private http: HttpClient) {}

  createArticle(
    articleInput: ArticleInputInterface
  ): Observable<ArticlesInterface> {
    // const fullUrl = environment.apiUrl + '/articles';

    // return this.http
    //   .post<SaveArticleResponseInterface>(fullUrl, articleInput)
    //   .pipe(map((response: SaveArticleResponseInterface) => response.article));

    return mockService.createArticle(articleInput);
  }
}
