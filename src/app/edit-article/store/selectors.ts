import { createFeatureSelector, createSelector } from '@ngrx/store';
import { EDIT_ARTICLE_STORE_KEY } from './reducers';
import { EditArticleStateInterface } from './types/edit-article-interface';

export const editArticleFeatureSelector =
  createFeatureSelector<EditArticleStateInterface>(EDIT_ARTICLE_STORE_KEY);

export const isLoadingSelector = createSelector(
  editArticleFeatureSelector,
  (editArticleState: EditArticleStateInterface) => editArticleState.isLoading
);

export const articleSelector = createSelector(
  editArticleFeatureSelector,
  (editArticleState: EditArticleStateInterface) => editArticleState.article
);

export const isSubmittingSelector = createSelector(
  editArticleFeatureSelector,
  (editArticleState: EditArticleStateInterface) => editArticleState.isSubmitting
);

export const validationErrorsSelector = createSelector(
  editArticleFeatureSelector,
  (editArticleState: EditArticleStateInterface) =>
    editArticleState.validationErrors
);
