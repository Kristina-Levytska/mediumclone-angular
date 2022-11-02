import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GetFeedResponseInterface } from '../types/getFeedResponse.interface';
import { FeedServiceMock } from './feed.service.mock';

const mockServer = new FeedServiceMock();

@Injectable({
  providedIn: 'root',
})
export class FeedService {
  constructor(private http: HttpClient) {}

  getFeed(url: string): Observable<GetFeedResponseInterface> {
    // const fullUrl = environment.apiUrl + url;
    // return this.http.get<GetFeedResponseInterface>(fullUrl);

    return mockServer.getFeed(url);
  }
}
