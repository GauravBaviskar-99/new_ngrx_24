import { createReducer, on } from '@ngrx/store';
import { initialState } from './auth.state';
import { autoLoginAction, loginSucess, logoutAction } from './auth.actions';

const _authReducer = createReducer(
  initialState,
  on(loginSucess, (state, action) => {
    return {
      ...state,
      user: action.user,
    };
  }),
  on(autoLoginAction, (state, action) => {
    return {
      ...state,
      user: action.user,
    };
  }),
  on(logoutAction, (state) => {
    return {
      ...state,
      user: null,
    };
  })
);

export function authReducer(state: any, action: any) {
  return _authReducer(state, action);
}
