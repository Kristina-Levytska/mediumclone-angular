import { PopularTag } from './popular-tags.interface';

export interface PopularTagStateInterface {
  data: PopularTag[] | null;
  error: string | null;
  isLoading: boolean;
}
