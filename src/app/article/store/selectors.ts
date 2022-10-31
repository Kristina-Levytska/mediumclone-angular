import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ArticleStateInterface } from '../types/article-state.interface';
import { ARTICLE_STORE_KEY } from './reducers';

export const articleFeatureSelector =
  createFeatureSelector<ArticleStateInterface>(ARTICLE_STORE_KEY);

export const isLoadingSelector = createSelector(
  articleFeatureSelector,
  (articleState) => articleState.isLoading
);

export const errorSelector = createSelector(
  articleFeatureSelector,
  (articleState) => articleState.error
);

export const articleSelector = createSelector(
  articleFeatureSelector,
  (articleState) => articleState.data
);
