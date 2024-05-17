import { createAction, props } from '@ngrx/store';
import { authResponse } from 'src/app/models/authResponse.model';
import { User } from 'src/app/models/user.model';

export const LOGIN_ACTION_START = '[login action ]';
export const LOGIN_ACTION_SUCCESS = '[login action success]';
export const LOGIN_ACTION_FAILED = '[login action failed]';

export const loginAction = createAction(
  LOGIN_ACTION_START,
  props<{ id: string; password: string }>()
);

export const loginSucess = createAction(
  LOGIN_ACTION_SUCCESS,
  props<{ user: User }>()
);
