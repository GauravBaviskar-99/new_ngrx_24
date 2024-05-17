import { createReducer, on } from '@ngrx/store';
import { initialState } from './auth.state';
import { loginSucess } from './auth.actions';

const _authReducer = createReducer(
  initialState,
  on(loginSucess, (state, action) => {
    return {
      ...state,
      user: action.user,
    };
  })
);

export function authReducer(state: any, action: any) {
  return _authReducer(state, action);
}
