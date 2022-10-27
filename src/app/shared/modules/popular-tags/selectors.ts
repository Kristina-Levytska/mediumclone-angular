import { createFeatureSelector, createSelector } from '@ngrx/store';
import { POPULAR_TAGS_STORE_KEY } from './reducers';
import { PopularTagStateInterface } from './types/popular-tags-state.interface';

export const popularTagFeatureSelector =
  createFeatureSelector<PopularTagStateInterface>(POPULAR_TAGS_STORE_KEY);

export const popularTagSelector = createSelector(
  popularTagFeatureSelector,
  (popularTagState: PopularTagStateInterface) => popularTagState.data
);

export const isLoadingSelector = createSelector(
  popularTagFeatureSelector,
  (popularTagState: PopularTagStateInterface) => popularTagState.isLoading
);

export const errorSelector = createSelector(
  popularTagFeatureSelector,
  (popularTagState: PopularTagStateInterface) => popularTagState.error
);
