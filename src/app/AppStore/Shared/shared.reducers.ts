import { createReducer, on } from '@ngrx/store';
import { initialState } from './shared.state';
import {
  activateSpinnerAction,
  showErrorMessageAction,
} from './shared.actions';

const _sharedStateReducer = createReducer(
  initialState,
  on(activateSpinnerAction, (state, action) => {
    return {
      ...state,
      status: action.showSpinner,
    };
  }),
  on(showErrorMessageAction, (state, action) => {
    return {
      ...state,
      errorMessage: action.errorMessage,
    };
  })
);

export function sharedStateReducer(state: any, action: any) {
  return _sharedStateReducer(state, action);
}
