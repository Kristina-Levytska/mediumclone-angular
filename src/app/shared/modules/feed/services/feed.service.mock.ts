import { HttpErrorResponse } from '@angular/common/http';
import { Observable, map, of, throwError } from 'rxjs';
import { GetFeedResponseInterface } from '../types/getFeedResponse.interface';

const getFeedMock = (): GetFeedResponseInterface => ({
  articles: [
    {
      author: {
        username: 'John Kennedy',
        bio: 'President',
        image: '',
        following: true,
      },
      body: 'We shall pay any price, bear any burden, meet any hardship, support any friend, oppose any foe to assure the survival and success of liberty.',
      createdAt: '22/11/1960',
      description: 'My Speech',
      favorited: true,
      favoritesCount: 100500,
      slug: '',
      tagList: ['1', '2', '3'],
      title: 'Make America great again!',
      updatedAt: '23/11/1950',
    },
    {
      author: {
        username: 'Eddie Murphy',
        bio: 'Comedian',
        image: '',
        following: false,
      },
      body: '',
      createdAt: '01/02/1996',
      description: 'Chills',
      favorited: true,
      favoritesCount: 253,
      slug: '',
      tagList: ['1', '2', '3'],
      title: "It wasn't me",
      updatedAt: '01/02/1996',
    },
    {
      author: {
        username: 'The Simpsons',
        bio: 'Family',
        image: '',
        following: true,
      },
      body: '',
      createdAt: '31/04/1993',
      description: 'Duff beer & jazz',
      favorited: false,
      favoritesCount: 99,
      slug: '',
      tagList: ['1', '2', '3'],
      title: 'Maaaarge',
      updatedAt: '31/04/1993',
    },
    {
      author: {
        username: 'Cinderella',
        bio: 'Family',
        image: '',
        following: true,
      },
      body: '',
      createdAt: '22/06/1954',
      description: 'But I found a prince...Coincidence?',
      favorited: false,
      favoritesCount: 7,
      slug: '',
      tagList: ['1', '2', '3'],
      title: "I think I've lost my shoe...",
      updatedAt: '22/06/1954',
    },
    {
      author: {
        username: 'Britney Spears',
        bio: 'Family',
        image: '',
        following: true,
      },
      body: '',
      createdAt: '13/07/2008',
      description:
        'If I got through 2008, you can definetly do it through 2022',
      favorited: false,
      favoritesCount: 7,
      slug: '',
      tagList: ['1', '2', '3'],
      title: '2008 meltdown',
      updatedAt: '13/07/2008',
    },
  ],
  articlesCount: 32,
});

export class FeedServiceMock {
  getFeed(): Observable<GetFeedResponseInterface> {
    return of(getFeedMock());
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
