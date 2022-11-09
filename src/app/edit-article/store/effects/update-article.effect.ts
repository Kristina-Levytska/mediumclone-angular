import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { switchMap, map, catchError, of, tap } from 'rxjs';
import { ArticlesInterface } from 'src/app/shared/types/articles.interface';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { EditArticleService } from '../../services/edit-article.service';
import {
  updateArticleAction,
  updateArticleFailureAction,
  updateArticleSuccessAction,
} from '../actions/update-article.action';

@Injectable()
export class UpdateArticleEffect {
  updateArticle$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateArticleAction),
      switchMap(({ articleInput, slug }) => {
        return this.editArticleService.updateArticle(slug, articleInput).pipe(
          map((article: ArticlesInterface) => {
            return updateArticleSuccessAction({ article });
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            return of(updateArticleFailureAction(errorResponse.error));
          })
        );
      })
    )
  );

  redirectAfterUpdate$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(updateArticleSuccessAction),
        tap(({ article }) => {
          this.router.navigate(['/articles', article.slug]);
        })
      ),
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private editArticleService: EditArticleService,
    private router: Router
  ) {}
}
