import { createAction, props } from '@ngrx/store';
import { authResponse } from 'src/app/models/authResponse.model';
import { User } from 'src/app/models/user.model';

export const LOGIN_ACTION_START = '[login action ]';
export const LOGIN_ACTION_SUCCESS = '[login action success]';
export const LOGIN_ACTION_FAILED = '[login action failed]';
export const SIGNUP_ACTION_START = '[sign up action]';
export const AUTO_LOGIN_ACTION = '[auto login action]';
export const LOGOUT_ACTION = '[logout action]';

export const loginAction = createAction(
  LOGIN_ACTION_START,
  props<{ id: string; password: string }>()
);

export const loginSucess = createAction(
  LOGIN_ACTION_SUCCESS,
  props<{ user: User }>()
);

export const signupAction = createAction(
  SIGNUP_ACTION_START,
  props<{ id: string; password: string }>()
);

export const autoLoginAction = createAction(
  AUTO_LOGIN_ACTION,
  props<{ user: User }>()
);

export const logoutAction = createAction(LOGOUT_ACTION);
