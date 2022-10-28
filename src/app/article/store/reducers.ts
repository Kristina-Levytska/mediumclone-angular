import { Action, createReducer, on } from '@ngrx/store';
import { ArticleStateInterface } from '../types/article-state.interface';
import {
  getArticleAction,
  getArticleFailureAction,
  getArticleSuccessAction,
} from './actions/get-article.action';
import { routerNavigationAction } from '@ngrx/router-store';

const initialState: ArticleStateInterface = {
  isLoading: false,
  error: null,
  data: null,
};

const articleReducer = createReducer(
  initialState,
  on(
    getArticleAction,
    (state): ArticleStateInterface => ({
      ...state,
      isLoading: true,
    })
  ),
  on(
    getArticleSuccessAction,
    (state, action): ArticleStateInterface => ({
      ...state,
      isLoading: false,
      data: action.article,
    })
  ),
  on(
    getArticleFailureAction,
    (state): ArticleStateInterface => ({
      ...state,
      isLoading: false,
    })
  ),
  on(routerNavigationAction, (): ArticleStateInterface => initialState)
);

export function reducers(state: ArticleStateInterface, action: Action) {
  return articleReducer(state, action);
}

export const ARTICLE_STORE_KEY = 'ARTICLE_STORE_KEY';
