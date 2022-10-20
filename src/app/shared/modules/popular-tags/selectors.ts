import { createFeatureSelector, createSelector } from '@ngrx/store';
import { POPULAR_TAGS_STORE_KEY } from './reducers';
import { PopularTagsStateInterface } from './types/popular-tags-state.interface';

export const popularTagsFeatureSelector =
  createFeatureSelector<PopularTagsStateInterface>(POPULAR_TAGS_STORE_KEY);

export const popularTagsSelector = createSelector(
  popularTagsFeatureSelector,
  (popularTagsState: PopularTagsStateInterface) => popularTagsState.data
);

export const isLoadingSelector = createSelector(
  popularTagsFeatureSelector,
  (popularTagsState: PopularTagsStateInterface) => popularTagsState.isLoading
);

export const errorSelector = createSelector(
  popularTagsFeatureSelector,
  (popularTagsState: PopularTagsStateInterface) => popularTagsState.error
);
