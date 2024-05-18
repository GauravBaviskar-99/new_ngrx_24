import { authReducer } from '../auth/authStore/auth.reducers';
import { AUTH_STATE_NAME } from '../auth/authStore/auth.selectors';
import { AuthState } from '../auth/authStore/auth.state';
import { sharedStateReducer } from './Shared/shared.reducers';
import { SHARED_STATE_NAME } from './Shared/shared.selectors';
import { sharedState } from './Shared/shared.state';

export interface AppState {
  [SHARED_STATE_NAME]: sharedState;
  [AUTH_STATE_NAME]: AuthState;
}

export const appReducer = {
  [SHARED_STATE_NAME]: sharedStateReducer,
  [AUTH_STATE_NAME]: authReducer,
};
