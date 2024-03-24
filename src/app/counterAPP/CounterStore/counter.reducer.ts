import { createReducer, on } from '@ngrx/store';
import { initialState } from './counter.state';
import {
  DecrementAction,
  IncrementAction,
  InputIncrementAction,
  ResetAction,
} from './counter.actions';

const _counterReducer = createReducer(
  initialState,
  on(IncrementAction, (state) => {
    return {
      ...state,
      counter: state.counter + 1,
    };
  }),
  on(DecrementAction, (state) => {
    return {
      ...state,
      counter: state.counter - 1,
    };
  }),
  on(ResetAction, (state) => {
    return {
      ...state,
      counter: 10,
    };
  }),
  on(InputIncrementAction, (state, action) => {
    return {
      ...state,
      counter: state.counter + action.value,
    };
  })
);

export function counterReducer(initialState: any, action: any) {
  return _counterReducer(initialState, action);
}
