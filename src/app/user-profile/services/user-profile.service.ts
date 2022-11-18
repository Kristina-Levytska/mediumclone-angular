import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ProfileInterface } from 'src/app/shared/types/profile.interface';
import { environment } from 'src/environments/environment';
import { GetUserProfileResponseInterface } from '../types/get-user-profile-response.interface';

@Injectable({
  providedIn: 'root',
})
export class UserProfileService {
  constructor(private http: HttpClient) {}

  getUserProfile(slug: string): Observable<ProfileInterface> {
    const url = `${environment.apiUrl}/profiles/${slug}`;

    return this.http
      .get<GetUserProfileResponseInterface>(url)
      .pipe(map((response) => response.profile));
  }
}
