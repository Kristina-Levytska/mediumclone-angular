import { Injectable } from '@angular/core';
import { map, Observable, switchMap } from 'rxjs';
import { RegisterRequestInterface } from '../types/registerRequest.interface';
import { CurrentUserInterface } from '../../shared/types/current-user.interface';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { AuthResponseInterface } from '../types/authResponse.interface';
import { LoginRequestInterface } from '../types/loginRequest.interface';
import { AuthServiceMock } from './auth.service.mock';
import { threadId } from 'worker_threads';
import { CurrentUserInputInterface } from 'src/app/shared/types/current-user-input.interface';

const mockServer = new AuthServiceMock();

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  getUser(response: AuthResponseInterface): CurrentUserInterface {
    return response.user;
  }

  register(data: RegisterRequestInterface): Observable<CurrentUserInterface> {
    // const url = environment.apiUrl + '/users';

    // return this.http
    //   .post<AuthResponseInterface>(url, data)
    //   .pipe(map(this.getUser));

    return mockServer.register();
  }

  login(data: LoginRequestInterface): Observable<CurrentUserInterface> {
    // const url = environment.apiUrl + '/users/login';

    // return this.http
    //   .post<AuthResponseInterface>(url, data)
    //   .pipe(map(this.getUser));

    return mockServer.login();
  }

  getCurrentUser(): Observable<CurrentUserInterface> {
    // const url = environment.apiUrl + '/user';

    // return this.http.get(url).pipe(map(this.getUser));

    return mockServer.getUser();
  }

  updateCurrentUser(
    currentUserInput: CurrentUserInputInterface
  ): Observable<CurrentUserInterface> {
    const url = environment.apiUrl + '/user';
    return this.http
      .put(url, currentUserInput)
      .pipe(switchMap(this.getCurrentUser));
  }
}
