import { Observable, of } from 'rxjs';
import { PopularTag } from '../modules/popular-tags/types/popular-tags.interface';
import { GetArticleResponseInterface } from '../types/get-article-response.interface';

const getArticleMock = (): GetArticleResponseInterface => ({
  article: {
    author: {
      username: 'John Kennedy',
      bio: null,
      image: '',
      following: false,
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
});

export class ArticleServiceMock {
  getArticle(): Observable<GetArticleResponseInterface> {
    return of(getArticleMock());
  }
}
