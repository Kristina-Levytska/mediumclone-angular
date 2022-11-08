import { createAction, props } from '@ngrx/store';
import { ArticleInputInterface } from 'src/app/shared/types/article-input.interface';
import { ArticlesInterface } from 'src/app/shared/types/articles.interface';
import { BackendErrorsInterface } from 'src/app/shared/types/backend-errors.interface';
import { ActionTypes } from '../action-types';

export const createArticleAction = createAction(
  ActionTypes.CREATE_ARTICLE,
  props<{ articleInput: ArticleInputInterface }>()
);

export const createArticleSuccessAction = createAction(
  ActionTypes.CREATE_ARTICLE_SUCCESS,
  props<{ article: ArticlesInterface }>()
);

export const createArticleFailureAction = createAction(
  ActionTypes.CREATE_ARTICLE_FAILURE,
  props<{ errors: BackendErrorsInterface }>()
);
