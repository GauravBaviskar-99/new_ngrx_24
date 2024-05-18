import { createFeatureSelector, createSelector } from '@ngrx/store';
import { sharedState } from './shared.state';

export const SHARED_STATE_NAME = 'sharedState';

const getSharedState = createFeatureSelector<sharedState>(SHARED_STATE_NAME);

export const getSpinnerState = createSelector(getSharedState, (state) => {
  return state.status;
});

export const getErrorMessage = createSelector(getSharedState, (state) => {
  return state.errorMessage;
});
