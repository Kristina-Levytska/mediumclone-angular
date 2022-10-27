import { AuthStateInterface } from 'src/app/auth/types/authState.interface';
import { FeedStateInterface } from '../modules/feed/types/feedState.interface';
import { PopularTagStateInterface } from '../modules/popular-tags/types/popular-tags-state.interface';

export interface AppStateInterface {
  auth: AuthStateInterface;
  feed: FeedStateInterface;
  PopularTag: PopularTagStateInterface;
}
