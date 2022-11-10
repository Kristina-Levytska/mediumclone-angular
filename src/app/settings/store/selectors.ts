import { createFeatureSelector, createSelector } from '@ngrx/store';
import { SettingsStateInterface } from '../types/settings-state.interface';
import { SETTINGS_STORE_KEY } from './reducers';

export const settingsFeatureSelector =
  createFeatureSelector<SettingsStateInterface>(SETTINGS_STORE_KEY);

export const isSubmittingSelector = createSelector(
  settingsFeatureSelector,
  (state) => state.isSubmitting
);

export const validationErrorsSelector = createSelector(
  settingsFeatureSelector,
  (state) => state.validationErrors
);
