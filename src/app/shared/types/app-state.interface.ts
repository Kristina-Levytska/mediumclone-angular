import { ArticleStateInterface } from 'src/app/article/types/article-state.interface';
import { AuthStateInterface } from 'src/app/auth/types/authState.interface';
import { FeedStateInterface } from '../modules/feed/types/feedState.interface';
import { PopularTagStateInterface } from '../modules/popular-tags/types/popular-tags-state.interface';

export interface AppStateInterface {
  isLoading: any;
  error: any;
  data: any;
  auth: AuthStateInterface;
  feed: FeedStateInterface;
  popularTag: PopularTagStateInterface;
  article: ArticleStateInterface;
}
