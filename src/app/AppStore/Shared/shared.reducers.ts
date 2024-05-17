import { createReducer, on } from '@ngrx/store';
import { initialState } from './shared.state';
import { activateSpinnerAction } from './shared.actions';

const _sharedStateReducer = createReducer(
  initialState,
  on(activateSpinnerAction, (state, action) => {
    return {
      ...state,
      status: action.showSpinner,
    };
  })
);

export function sharedStateReducer(state: any, action: any) {
  return _sharedStateReducer(state, action);
}
