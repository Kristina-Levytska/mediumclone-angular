import { createAction, props } from '@ngrx/store';
import { ArticleInputInterface } from 'src/app/shared/types/article-input.interface';
import { ArticlesInterface } from 'src/app/shared/types/articles.interface';
import { BackendErrorsInterface } from 'src/app/shared/types/backend-errors.interface';
import { ActionTypes } from '../action-types';

export const updateArticleAction = createAction(
  ActionTypes.UPDATE_ARTICLE,
  props<{ slug: string; articleInput: ArticleInputInterface }>()
);

export const updateArticleSuccessAction = createAction(
  ActionTypes.UPDATE_ARTICLE_SUCCESS,
  props<{ article: ArticlesInterface }>()
);
export const updateArticleFailureAction = createAction(
  ActionTypes.UPDATE_ARTICLE_FAILURE,
  props<{ errors: BackendErrorsInterface }>()
);
