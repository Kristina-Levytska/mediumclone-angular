import { Action, createReducer, on } from '@ngrx/store';
import {
  getPopularTagsAction,
  getPopularTagsFailureAction,
  getPopularTagsSuccessAction,
} from './store/actions/getPopularTags.action';
import { PopularTagsStateInterface } from './types/popular-tags-state.interface';

const initialState: PopularTagsStateInterface = {
  data: null,
  error: null,
  isLoading: false,
};

const popularTagsReducer = createReducer(
  initialState,
  on(
    getPopularTagsAction,
    (state): PopularTagsStateInterface => ({
      ...state,
      isLoading: true,
    })
  ),
  on(
    getPopularTagsSuccessAction,
    (state, action): PopularTagsStateInterface => ({
      ...state,
      data: action.popularTags,
      isLoading: false,
    })
  ),
  on(
    getPopularTagsFailureAction,
    (state): PopularTagsStateInterface => ({
      ...state,
      isLoading: false,
    })
  )
);

export function reducers(state: PopularTagsStateInterface, action: Action) {
  return popularTagsReducer(state, action);
}

export const POPULAR_TAGS_STORE_KEY = 'POPULAR_TAGS_STORE_KEY';
