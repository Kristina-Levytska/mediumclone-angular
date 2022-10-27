import { Observable, of } from 'rxjs';
import { GetPopularTagResponseInterface } from '../types/get-popular-tags-response.interface';
import { PopularTag } from '../types/popular-tags.interface';

const getPopularTagMock = (): GetPopularTagResponseInterface => ({
  tags: Object.values(PopularTag) as unknown as PopularTag[],
});

export class PopularTagMock {
  getTag(): Observable<GetPopularTagResponseInterface> {
    console.log(getPopularTagMock());
    return of(getPopularTagMock());
  }
}
