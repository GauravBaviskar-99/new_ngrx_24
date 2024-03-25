import { ActionTypes } from './counter.actions';
import { counterState, initialState } from './counter.state';

export function counterReducer(
  state: counterState = initialState,
  action: any
): counterState {
  switch (action.type) {
    case ActionTypes.IncrementAction:
      return {
        ...state,
        counter: state.counter + 1,
      };
    case ActionTypes.DecrementAction:
      return {
        ...state,
        counter: state.counter - 1,
      };
    case ActionTypes.CounterResetAction:
      return {
        ...state,
        counter: 99,
      };
    case ActionTypes.CounterInputIncrementAction:
      return {
        ...state,
        counter: state.counter + action.payload.value,
      };

    default:
      return state;
  }
}
