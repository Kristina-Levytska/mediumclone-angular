import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ArticlesInterface } from '../types/articles.interface';
import { GetArticleResponseInterface } from '../types/get-article-response.interface';
import { ArticleServiceMock } from './article.service.mock';

const mockServer = new ArticleServiceMock();

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  constructor(private http: HttpClient) {}

  getArticle(slug: String): Observable<ArticlesInterface> {
    // const fullUrl = `${environment.apiUrl}/articles/${slug}`;

    // return this.http.get<GetArticleResponseInterface>(fullUrl).pipe(
    //   map((response: GetArticleResponseInterface) => {
    //     return response.article;
    //   })
    // );

    return mockServer.getArticle().pipe(
      map((response: GetArticleResponseInterface) => {
        return response.article;
      })
    );
  }
}
