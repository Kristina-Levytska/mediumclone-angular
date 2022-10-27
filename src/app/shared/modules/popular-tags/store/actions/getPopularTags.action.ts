import { createAction, props } from '@ngrx/store';
import { PopularTag } from '../../types/popular-tags.interface';
import { ActionTypes } from '../action-types';

export const getPopularTagAction = createAction(ActionTypes.GET_POPULAR_TAGS);

export const getPopularTagSuccessAction = createAction(
  ActionTypes.GET_POPULAR_TAGS_SUCCESS,
  props<{ PopularTag: PopularTag[] }>()
);

export const getPopularTagFailureAction = createAction(
  ActionTypes.GET_POPULAR_TAGS_FAILURE
);
