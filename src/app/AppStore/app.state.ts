import { sharedStateReducer } from './Shared/shared.reducers';
import { SHARED_STATE_NAME } from './Shared/shared.selectors';
import { sharedState } from './Shared/shared.state';

export interface AppState {
  [SHARED_STATE_NAME]: sharedState;
}

export const appReducer = {
  [SHARED_STATE_NAME]: sharedStateReducer,
};
