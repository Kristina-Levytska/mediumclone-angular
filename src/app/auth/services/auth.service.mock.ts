import { HttpErrorResponse } from '@angular/common/http';
import { Observable, map, of, throwError } from 'rxjs';
import { CurrentUserInterface } from '../../shared/types/current-user.interface';

const getUserMock = (): CurrentUserInterface => ({
  id: 1,
  email: 'mock-user@gmail.com',
  createdAt: '01/01/2022',
  updatedAt: '01/01/2022',
  username: 'Jon Show',
  bio: 'bio',
  image: '',
  token: 'USER_TOKEN_MOCK',
});

export class AuthServiceMock {
  getUser(): Observable<CurrentUserInterface> {
    return of(getUserMock());
  }

  register(): Observable<CurrentUserInterface> {
    return of(getUserMock());
  }

  login(): Observable<CurrentUserInterface> {
    return of(getUserMock());
  }

  validationError(): Observable<never> {
    return throwError(() => {
      throw new HttpErrorResponse({
        error: ['Error 1', 'Error 2'],
        status: 400,
      });
    });
  }
}
