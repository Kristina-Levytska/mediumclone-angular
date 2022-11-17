import { Action, createReducer, on } from '@ngrx/store';
import { UserProfileStateInterface } from '../types/user-profile-state.interface';
import {
  getUserProfileAction,
  getUserProfileSuccessAction,
} from './actions/get-user-profile.action';

const initialState: UserProfileStateInterface = {
  isLoading: false,
  data: null,
  error: null,
};

const userProfileReducer = createReducer(
  initialState,
  on(
    getUserProfileAction,
    (state): UserProfileStateInterface => ({
      ...state,
      isLoading: true,
    })
  ),
  on(
    getUserProfileSuccessAction,
    (state, action): UserProfileStateInterface => ({
      ...state,
      isLoading: false,
      data: action.userProfile,
    })
  ),
  on(
    getUserProfileSuccessAction,
    (state): UserProfileStateInterface => ({
      ...state,
      isLoading: false,
    })
  )
);

export function reducers(state: UserProfileStateInterface, action: Action) {
  return userProfileReducer(state, action);
}

export const USER_PROFILE_STORE_KEY = 'USER_PROFILE_STORE_KEY';
