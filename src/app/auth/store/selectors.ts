import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AuthStateInterface } from '../types/authState.interface';
import { AUTH_STORE_KEY } from './reducers';

export const authFeatureSelector =
  createFeatureSelector<AuthStateInterface>(AUTH_STORE_KEY);

export const isSubmittingSelector = createSelector(
  authFeatureSelector,
  (state) => state.isSubmitting
);
