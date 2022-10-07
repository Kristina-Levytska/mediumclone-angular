import { Injectable } from '@angular/core';
import {
  registerAction,
  registerFailureAction,
  registerSuccessAction,
} from '../actions/register.action';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth.service';
import { CurrentUserInterface } from 'src/app/shared/types/current-user.interface';
import { of } from 'rxjs';

@Injectable()
export class RegisterEffect {
  register$ = createEffect(() =>
    this.actions$.pipe(
      ofType(registerAction),
      switchMap(({ request }) => {
        return this.authService.register(request).pipe(
          map((currentUser: CurrentUserInterface) => {
            return registerSuccessAction({ currentUser });
          }),
          catchError(() => {
            return of(registerFailureAction());
          })
        );
      })
    )
  );

  constructor(private actions$: Actions, private authService: AuthService) {}
}
