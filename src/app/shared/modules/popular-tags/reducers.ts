import { Action, createReducer, on } from '@ngrx/store';
import {
  getPopularTagAction,
  getPopularTagFailureAction,
  getPopularTagSuccessAction,
} from './store/actions/getPopularTags.action';
import { PopularTagStateInterface } from './types/popular-tags-state.interface';

const initialState: PopularTagStateInterface = {
  data: null,
  error: null,
  isLoading: false,
};

const PopularTagReducer = createReducer(
  initialState,
  on(
    getPopularTagAction,
    (state): PopularTagStateInterface => ({
      ...state,
      isLoading: true,
    })
  ),
  on(
    getPopularTagSuccessAction,
    (state, action): PopularTagStateInterface => ({
      ...state,
      data: action.PopularTag,
      isLoading: false,
    })
  ),
  on(
    getPopularTagFailureAction,
    (state): PopularTagStateInterface => ({
      ...state,
      isLoading: false,
    })
  )
);

export function reducers(state: PopularTagStateInterface, action: Action) {
  return PopularTagReducer(state, action);
}

export const POPULAR_TAGS_STORE_KEY = 'POPULAR_TAGS_STORE_KEY';
