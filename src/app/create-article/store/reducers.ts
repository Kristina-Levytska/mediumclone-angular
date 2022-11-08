import { ActionCreator, createReducer, on } from '@ngrx/store';
import {
  createArticleAction,
  createArticleFailureAction,
  createArticleSuccessAction,
} from './actions/create-article.action';
import { CreateArticleStateInterface } from './types/create-article-state.interface';

const initialState: CreateArticleStateInterface = {
  isSubmitting: false,
  validationErrors: null,
};

const createArticleReducer = createReducer(
  initialState,
  on(
    createArticleAction,
    (state): CreateArticleStateInterface => ({
      ...state,
      isSubmitting: true,
    })
  ),
  on(
    createArticleSuccessAction,
    (state): CreateArticleStateInterface => ({
      ...state,
      isSubmitting: false,
      validationErrors: null,
    })
  ),
  on(
    createArticleFailureAction,
    (state, action): CreateArticleStateInterface => ({
      ...state,
      isSubmitting: false,
      validationErrors: action.errors,
    })
  )
);

export function reducers(
  state: CreateArticleStateInterface,
  action: ActionCreator
) {
  return createArticleReducer(state, action);
}

export const CREATE_ARTICLE_STORE_KEY = 'CREATE_ARTICLE_STORE_KEY';
