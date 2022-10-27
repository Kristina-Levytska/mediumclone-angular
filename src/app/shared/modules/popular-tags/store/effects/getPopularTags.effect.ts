import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

import { PopularTagService } from '../../services/popular-tags.service';
import {
  getPopularTagAction,
  getPopularTagFailureAction,
  getPopularTagSuccessAction,
} from '../actions/getPopularTags.action';
import { PopularTagType } from 'src/app/shared/types/popular-tag.type';
import { PopularTag } from '../../types/popular-tags.interface';

@Injectable()
export class GetPopularTagEffect {
  getPopularTag$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getPopularTagAction),
      switchMap(() => {
        return this.PopularTagService.getPopularTag().pipe(
          map((PopularTag: PopularTag[]) => {
            return getPopularTagSuccessAction({ PopularTag });
          }),
          catchError(() => {
            return of(getPopularTagFailureAction());
          })
        );
      })
    )
  );

  constructor(
    private actions$: Actions,
    private PopularTagService: PopularTagService
  ) {}
}
