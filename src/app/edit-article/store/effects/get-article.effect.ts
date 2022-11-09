import { Injectable } from '@angular/core';
import { switchMap, map, catchError, of } from 'rxjs';
import { ArticlesInterface } from 'src/app/shared/types/articles.interface';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import {
  getArticleAction,
  getArticleFailureAction,
  getArticleSuccessAction,
} from '../actions/get-article.action';
import { SharedArticleService } from 'src/app/shared/services/article.service';

@Injectable()
export class GetArticleEffect {
  getArticle$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getArticleAction),
      switchMap(({ slug }) => {
        return this.sharedArticleService.getArticle(slug).pipe(
          map((article: ArticlesInterface) => {
            return getArticleSuccessAction({ article });
          }),
          catchError(() => {
            return of(getArticleFailureAction);
          })
        );
      })
    )
  );

  constructor(
    private actions$: Actions,
    private sharedArticleService: SharedArticleService
  ) {}
}
