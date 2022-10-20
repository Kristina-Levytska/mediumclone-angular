import { PopularTagType } from 'src/app/shared/types/popular-tag.type';

export interface PopularTagsStateInterface {
  data: PopularTagType[] | null;
  error: string | null;
  isLoading: boolean;
}
