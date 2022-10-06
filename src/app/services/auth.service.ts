import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { RegisterRequestInterface } from '../auth/types/registerRequest.interface';
import { CurrentUserInterface } from '../shared/types/current-user.interface';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { AuthResponseInterface } from '../auth/types/authResponse.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  register(data: RegisterRequestInterface): Observable<CurrentUserInterface> {
    const url = environment.apiUrl + '/users';

    return this.http
      .post<AuthResponseInterface>(url, data)
      .pipe(map((response: AuthResponseInterface) => response.user));
  }
}
