import { createAction, props } from '@ngrx/store';
import { ActionTypes } from '../action-types';

export const deleteArticleAction = createAction(
  ActionTypes.DELETE_ARTICLE,
  props<{ slug: string }>()
);

export const deleteArticleSuccessAction = createAction(
  ActionTypes.DELETE_ARTICLE_SUCCESS
);

export const deleteArticleFailureAction = createAction(
  ActionTypes.DELETE_ARTICLE_FAILURE
);
