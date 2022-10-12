import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { RegisterRequestInterface } from '../auth/types/registerRequest.interface';
import { CurrentUserInterface } from '../shared/types/current-user.interface';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { AuthResponseInterface } from '../auth/types/authResponse.interface';
import { LoginRequestInterface } from '../auth/types/loginRequest.interface';
import { AuthServiceMock } from './auth.service.mock';

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
}
