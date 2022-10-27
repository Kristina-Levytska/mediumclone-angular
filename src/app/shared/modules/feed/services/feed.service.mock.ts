import { HttpErrorResponse } from '@angular/common/http';
import { Observable, map, of, throwError } from 'rxjs';
import { PopularTag } from '../../popular-tags/types/popular-tags.interface';
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
      tagList: [PopularTag.President, PopularTag.USA, PopularTag.Freedom],
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
      tagList: [PopularTag.StandUp, PopularTag.Comedy, PopularTag.Life],
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
      tagList: [PopularTag.Simpsons, PopularTag.Beer, PopularTag.StoryOfMyLife],
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
      tagList: [PopularTag.Shoe, PopularTag.Prince, PopularTag.Ball],
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
      tagList: [PopularTag.Pop, PopularTag.Music, PopularTag.MeltDown],
      title: '2008 meltdown',
      updatedAt: '13/07/2008',
    },
    {
      author: {
        username: 'Michael Jackson',
        bio: 'King of Pop',
        image: '',
        following: true,
      },
      body: '',
      createdAt: '04/10/1994',
      description: 'Hee hee',
      favorited: false,
      favoritesCount: 298,
      slug: '',
      tagList: [PopularTag.Pop, PopularTag.Music, PopularTag.King],
      title: 'The only thing I love is music',
      updatedAt: '04/10/1994',
    },
    {
      author: {
        username: 'Elvis Presley',
        bio: 'The King',
        image: '',
        following: false,
      },
      body: '',
      createdAt: '18/02/1959',
      description: 'A little less conversation, a little more action please',
      favorited: false,
      favoritesCount: 298,
      slug: '',
      tagList: [PopularTag.Music, PopularTag.King, PopularTag.Dance],
      title: 'If I could dream',
      updatedAt: '18/02/1959',
    },
    {
      author: {
        username: 'Kurt Cobain',
        bio: 'The man who sold the world',
        image: '',
        following: false,
      },
      body: '',
      createdAt: '23/05/1991',
      description: 'SLTS',
      favorited: false,
      favoritesCount: 48,
      slug: '',
      tagList: [PopularTag.Music, PopularTag.Rock, PopularTag.Nineties],
      title: 'Come as you are',
      updatedAt: '23/05/1991',
    },
    {
      author: {
        username: 'Marshall Bruce Mathers III',
        bio: 'Rap God',
        image: '',
        following: true,
      },
      body: '',
      createdAt: '11/10/1995',
      description: 'I love moms spaghetti',
      favorited: true,
      favoritesCount: 502,
      slug: '',
      tagList: [PopularTag.Nineties, PopularTag.Music, PopularTag.Rap],
      title: 'The real Slim Shady',
      updatedAt: '11/10/1995',
    },
    {
      author: {
        username: 'Tupac Shakur',
        bio: 'Makaveli',
        image: '',
        following: true,
      },
      body: '',
      createdAt: '01/06/1994',
      description: 'Hail Mary',
      favorited: true,
      favoritesCount: 57,
      slug: '',
      tagList: [PopularTag.Music, PopularTag.ThugLife, PopularTag.Nineties],
      title: 'One pac, two pac, three pac, four',
      updatedAt: '01/06/1994',
    },
    {
      author: {
        username: 'Santa Claus',
        bio: 'Father Winter',
        image: '',
        following: false,
      },
      body: '',
      createdAt: '31/12/1999',
      description: 'Ho Ho Ho',
      favorited: true,
      favoritesCount: 57,
      slug: '',
      tagList: [PopularTag.Winter, PopularTag.Xmas, PopularTag.Holidays],
      title: 'Merry Christmas & Happy New Year',
      updatedAt: '31/12/1999',
    },
    {
      author: {
        username: 'George Michael',
        bio: 'Father Figure',
        image: '',
        following: true,
      },
      body: '',
      createdAt: '24/12/1989',
      description: 'but the very next day, you gave it away',
      favorited: true,
      favoritesCount: 57,
      slug: '',
      tagList: [PopularTag.Nineties, PopularTag.Music, PopularTag.Soul],
      title: 'Last Christmas I gave you my heart',
      updatedAt: '24/12/1989',
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
