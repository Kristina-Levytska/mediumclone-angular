import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { AddToFavoritesService } from '../../services/add-to-favorites.service';
import {
  addToFavoritesAction,
  addToFavoritesFailureAction,
  addToFavoritesSuccessAction,
} from '../actions/add-to-favorites.action';
import { ArticlesInterface } from 'src/app/shared/types/articles.interface';
import { Router } from '@angular/router';

@Injectable()
export class AddToFavoritesEffect {
  addToFavorites$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addToFavoritesAction),
      switchMap(({ isFavorited, slug }) => {
        const article$ = isFavorited
          ? this.addToFavoritesService.removeFromFavorites(slug)
          : this.addToFavoritesService.addToFavorites(slug);

        return article$.pipe(
          map((article: ArticlesInterface) => {
            return addToFavoritesSuccessAction({ article });
          }),
          catchError(() => {
            return of(addToFavoritesFailureAction());
          })
        );
      })
    )
  );

  redirectIfNotSignedUp$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(addToFavoritesFailureAction),
        tap(() => {
          this.router.navigateByUrl('/register');
        })
      ),
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private addToFavoritesService: AddToFavoritesService,
    private router: Router
  ) {}
}
