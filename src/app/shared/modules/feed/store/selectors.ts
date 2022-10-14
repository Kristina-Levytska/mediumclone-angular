import { createFeatureSelector, createSelector } from '@ngrx/store';
import { FeedStateInterface } from '../types/feedState.interface';
import { FEED_STORE_KEY } from './reducers';

export const feedFeatureSelector =
  createFeatureSelector<FeedStateInterface>(FEED_STORE_KEY);

export const isLoadingSelector = createSelector(
  feedFeatureSelector,
  (feedState) => feedState.isLoading
);

export const errorSelector = createSelector(
  feedFeatureSelector,
  (feedState) => feedState.error
);

export const feedSelector = createSelector(
  feedFeatureSelector,
  (feedState) => feedState.data
);
