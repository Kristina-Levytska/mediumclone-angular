import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CREATE_ARTICLE_STORE_KEY } from './reducers';
import { CreateArticleStateInterface } from './types/create-article-state.interface';

export const createArticleFeatureSelector =
  createFeatureSelector<CreateArticleStateInterface>(CREATE_ARTICLE_STORE_KEY);

export const isSubmittingSelector = createSelector(
  createArticleFeatureSelector,
  (createArticleState: CreateArticleStateInterface) =>
    createArticleState.isSubmitting
);

export const validationErrorsSelector = createSelector(
  createArticleFeatureSelector,
  (createArticleState: CreateArticleStateInterface) =>
    createArticleState.validationErrors
);
