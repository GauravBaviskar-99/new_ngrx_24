import { Action } from '@ngrx/store';

export enum ActionTypes {
  IncrementAction = 'Counter Increment',
  DecrementAction = 'Counter Decrement',
  CounterResetAction = 'Counter Reset',
  CounterInputIncrementAction = 'Counter Input Increment',
}

export class CounterIncrementAction implements Action {
  readonly type = ActionTypes.IncrementAction;
}

export class CounterDecrementAction implements Action {
  readonly type = ActionTypes.DecrementAction;
}

export class CounterResetAction implements Action {
  readonly type = ActionTypes.CounterResetAction;
}

export class CounterInputIncrementAction implements Action {
  readonly type = ActionTypes.CounterInputIncrementAction;

  constructor(public payload: { value: number }) {}
}
