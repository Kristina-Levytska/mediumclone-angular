import { createAction, props } from '@ngrx/store';

import { ArticlesInterface } from 'src/app/shared/types/articles.interface';

import { ActionTypes } from '../action-types';

export const getArticleAction = createAction(
  ActionTypes.GET_ARTICLE,
  props<{ slug: string }>()
);

export const getArticleSuccessAction = createAction(
  ActionTypes.GET_ARTICLE_SUCCESS,
  props<{ article: ArticlesInterface }>()
);
export const getArticleFailureAction = createAction(
  ActionTypes.GET_ARTICLE_FAILURE
);
