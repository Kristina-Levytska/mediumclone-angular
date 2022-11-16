import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ArticlesInterface } from 'src/app/shared/types/articles.interface';
import { GetArticleResponseInterface } from 'src/app/shared/types/get-article-response.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AddToFavoritesService {
  constructor(private http: HttpClient) {}

  addToFavorites(slug: string): Observable<ArticlesInterface> {
    const url = this.getUrl(slug);
    return this.http.post(url, {}).pipe(map(this.getArticle as any));
  }

  removeFromFavorites(slug: string): Observable<ArticlesInterface> {
    const url = this.getUrl(slug);
    return this.http.delete(url).pipe(map(this.getArticle as any));
  }

  getUrl(slug: string): string {
    return `${environment.apiUrl}/articles/${slug}/favorite`;
  }

  getArticle(response: GetArticleResponseInterface): ArticlesInterface {
    return response.article;
  }
}
