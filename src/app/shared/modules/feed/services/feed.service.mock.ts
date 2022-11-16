import { HttpErrorResponse } from '@angular/common/http';
import { Observable, map, of, throwError } from 'rxjs';
import { PopularTag } from '../../popular-tags/types/popular-tags.interface';
import { GetFeedResponseInterface } from '../types/getFeedResponse.interface';

import { parseUrl } from 'query-string';
import { ArticlesInterface } from 'src/app/shared/types/articles.interface';

export const ALL_ARTICLES_MOCK: ArticlesInterface[] = [
  {
    author: {
      username: 'John Kennedy',
      bio: 'President',
      image: '/assets/img/kennedy.jpg',
      following: true,
    },
    body: 'We shall pay any price, bear any burden, meet any hardship, support any friend, oppose any foe to assure the survival and success of liberty.',
    createdAt: '22/11/1960',
    description: 'My Speech',
    favorited: false,
    favoritesCount: 103,
    slug: 'my-speech',
    tagList: [PopularTag.President, PopularTag.USA, PopularTag.Freedom],
    title: 'Make America great again!',
    updatedAt: '23/11/1950',
  },
  {
    author: {
      username: 'Eddie Murphy',
      bio: 'Comedian',
      image: '/assets/img/eddie_murphy.jpg',
      following: false,
    },
    body: 'Does anyone have a mother that would hit you with a shoe? I had a mother that would throw a shoe at you at the drop of a dime. And f*** you up wherever she was aiming. So by the time I was like ten, my mother was like Clint Eastwood with a shoe --',
    createdAt: '01/02/1996',
    description: 'Chills',
    favorited: false,
    favoritesCount: 253,
    slug: 'chills',
    tagList: [PopularTag.StandUp, PopularTag.Comedy, PopularTag.Life],
    title: "It wasn't me",
    updatedAt: '01/02/1996',
  },
  {
    author: {
      username: 'The Simpsons',
      bio: 'Family',
      image: '/assets/img/simpsons.png',
      following: true,
    },
    body: 'Kids, you tried your best and you failed miserably. The lesson is, never try.',
    createdAt: '31/04/1993',
    description: 'Duff beer & jazz',
    favorited: false,
    favoritesCount: 99,
    slug: 'duff-beer-and-jazz',
    tagList: [PopularTag.Simpsons, PopularTag.Beer, PopularTag.StoryOfMyLife],
    title: 'Maaaarge',
    updatedAt: '31/04/1993',
  },
  {
    author: {
      username: 'Cinderella',
      bio: 'Family',
      image: '/assets/img/cinderella.jpg',
      following: true,
    },
    body: 'No matter how your heart is grieving, if you keep on believing, the dream that you wish will come true.',
    createdAt: '22/06/1954',
    description: 'But I found a prince...Coincidence?',
    favorited: false,
    favoritesCount: 7,
    slug: 'coincidence',
    tagList: [PopularTag.Shoe, PopularTag.Prince, PopularTag.Ball],
    title: "I think I've lost my shoe...",
    updatedAt: '22/06/1954',
  },
  {
    author: {
      username: 'Britney Spears',
      bio: 'Family',
      image: '/assets/img/britney.png',
      following: true,
    },
    body: "I've always followed my heart and pursued my dreams, and I imagine that people find that inspiring. I hope that is the effect I have on my fans and people in general. I definitely want to project a positive energy out into the world.",
    createdAt: '13/07/2008',
    description: 'If I got through 2008, you can definetly do it through 2022',
    favorited: false,
    favoritesCount: 7,
    slug: '2008-meltdown',
    tagList: [PopularTag.Pop, PopularTag.Music, PopularTag.MeltDown],
    title: '2008 meltdown',
    updatedAt: '13/07/2008',
  },
  {
    author: {
      username: 'Michael Jackson',
      bio: 'King of Pop',
      image: '/assets/img/michael.jpeg',
      following: true,
    },
    body: ' Consciousness expresses itself through creation. This world we live in is the dance of the creator. Dancers come and go in the twinkling of an eye but the dance lives on. On many an occasion when I am dancing, I have felt touched by something sacred.In those moments, I felt my spirit soar and become one with everything that exists. I become the stars and the moon. I become the lover and the beloved. I become thevictor and the vanquished. I become the master and the slave. I become the singer and the song. I become the knower and the known. I keep on dancing then it is the eternal dance or creation. The creator and creation merge into one wholeness of joy. I keep on dancing...and dancing...and dancing. Until there is only the dance.',
    createdAt: '04/10/1994',
    description: 'Hee hee',
    favorited: false,
    favoritesCount: 298,
    slug: 'king-of-pop',
    tagList: [PopularTag.Pop, PopularTag.Music, PopularTag.King],
    title: 'The only thing I love is music',
    updatedAt: '04/10/1994',
  },
  {
    author: {
      username: 'Elvis Presley',
      bio: 'The King',
      image: '/assets/img/elvis.jpg',
      following: false,
    },
    body: "Ambition is a dream with a V8 engine. Ain't nowhere else in the world where you can go from driving a truck to cadillac overnight",
    createdAt: '18/02/1959',
    description: 'A little less conversation, a little more action please',
    favorited: false,
    favoritesCount: 298,
    slug: 'the-king',
    tagList: [PopularTag.Music, PopularTag.King, PopularTag.Dance],
    title: 'If I could dream',
    updatedAt: '18/02/1959',
  },
  {
    author: {
      username: 'Kurt Cobain',
      bio: 'The man who sold the world',
      image: '/assets/img/kurt.jpg',
      following: false,
    },
    body: "If you die you're completely happy and your soul somewhere lives on. I'm not afraid of dying. Total peace after death, becoming someone else is the best hope I've got.",
    createdAt: '23/05/1991',
    description: 'SLTS',
    favorited: false,
    favoritesCount: 48,
    slug: 'nirvana',
    tagList: [PopularTag.Music, PopularTag.Rock, PopularTag.Nineties],
    title: 'Come as you are',
    updatedAt: '23/05/1991',
  },
  {
    author: {
      username: 'Marshall Bruce Mathers III',
      bio: 'Rap God',
      image: '/assets/img/eminem.jpg',
      following: true,
    },
    body: 'Cause sometimes, you just feel tired. Feel weak. And when you feel weak, you feel like you wanna just give up. But you gotta search within you. You gotta find that inner strength, and just pull that shit out of you. And get that motivation to NOT give up and NOT be a quitter. No matter how bad you wanna just fall flat on your face and collapse.',
    createdAt: '11/10/1995',
    description: 'I love moms spaghetti',
    favorited: false,
    favoritesCount: 502,
    slug: 'moms-spaghetti',
    tagList: [PopularTag.Nineties, PopularTag.Music, PopularTag.Rap],
    title: 'The real Slim Shady',
    updatedAt: '11/10/1995',
  },
  {
    author: {
      username: 'Tupac Shakur',
      bio: 'Makaveli',
      image: '/assets/img/tupac.jpg',
      following: true,
    },
    body: "There's gonna be some stuff you gonna see thats gonna make it hard to smile in the future, but through whatever you see, through all the rain and the pain you gotta keep your sense of humor. You gotta be able to smile through all this bullshit… remember that.",
    createdAt: '01/06/1994',
    description: 'Hail Mary',
    favorited: false,
    favoritesCount: 57,
    slug: 'hail-mary',
    tagList: [PopularTag.Music, PopularTag.ThugLife, PopularTag.Nineties],
    title: 'One pac, two pac, three pac, four',
    updatedAt: '01/06/1994',
  },
  {
    author: {
      username: 'Santa Claus',
      bio: 'Father Winter',
      image: '/assets/img/santa.jpg',
      following: false,
    },
    body: 'Ho Ho Ho Ho Ho Ho Ho HOOOOOO',
    createdAt: '31/12/1999',
    description: 'Ho Ho Ho',
    favorited: false,
    favoritesCount: 57,
    slug: 'santas-story',
    tagList: [PopularTag.Winter, PopularTag.Xmas, PopularTag.Holidays],
    title: 'Merry Christmas & Happy New Year',
    updatedAt: '31/12/1999',
  },
  {
    author: {
      username: 'George Michael',
      bio: 'Father Figure',
      image: '/assets/img/george-michael.jpg',
      following: true,
    },
    body: 'The first sign of real obsession with music was with an old wind-up gramophone that mum had thrown out into the garage. My parents gave me three old 45s - two Supremes records and one Tom Jones record - and I used to come home from school literally every day, go out to the garage, wind this thing up, and play them.',
    createdAt: '24/12/1989',
    description: 'but the very next day, you gave it away',
    favorited: false,
    favoritesCount: 57,
    slug: 'holiday-drama',
    tagList: [PopularTag.Nineties, PopularTag.Music, PopularTag.Soul],
    title: 'Last Christmas I gave you my heart',
    updatedAt: '24/12/1989',
  },
];

const getFeedMock = (
  limit: number,
  offset: number
): GetFeedResponseInterface => ({
  articles: ALL_ARTICLES_MOCK.slice(offset, offset + limit),
  articlesCount: ALL_ARTICLES_MOCK.length,
});

export class FeedServiceMock {
  getFeed(url: string): Observable<GetFeedResponseInterface> {
    const { limit, offset } = parseUrl(url).query;

    return of(getFeedMock(Number(limit), Number(offset)));
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
