import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { GetPopularTagResponseInterface } from '../types/get-popular-tags-response.interface';
import { PopularTag } from '../types/popular-tags.interface';
import { PopularTagMock } from './popular-tags.service.mock';

const mockServer = new PopularTagMock();

@Injectable({
  providedIn: 'root',
})
export class PopularTagService {
  constructor(private http: HttpClient) {}

  getPopularTag(): Observable<PopularTag[]> {
    // const url = environment.apiUrl + '/tags';
    // return this.http.get<GetPopularTagResponseInterface>(url).pipe(
    //   map((response: GetPopularTagResponseInterface) => {
    //     return response.tags;
    //   })
    // );

    return mockServer.getTag().pipe(
      map((response: GetPopularTagResponseInterface) => {
        return response.tags;
      })
    );
  }
}
