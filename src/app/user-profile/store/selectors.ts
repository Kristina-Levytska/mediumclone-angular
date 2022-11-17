import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UserProfileStateInterface } from '../types/user-profile-state.interface';
import { USER_PROFILE_STORE_KEY } from './reducers';

export const userProfileFeatureSelector =
  createFeatureSelector<UserProfileStateInterface>(USER_PROFILE_STORE_KEY);

export const isLoadingSelector = createSelector(
  userProfileFeatureSelector,
  (userProfileState) => userProfileState.isLoading
);

export const errorSelector = createSelector(
  userProfileFeatureSelector,
  (userProfileState) => userProfileState.error
);

export const userProfileSelector = createSelector(
  userProfileFeatureSelector,
  (userProfileState) => userProfileState.data
);
