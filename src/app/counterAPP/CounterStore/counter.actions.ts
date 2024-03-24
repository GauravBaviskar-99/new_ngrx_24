import { createAction, props } from '@ngrx/store';

export const IncrementAction = createAction('Counter Increment');
export const DecrementAction = createAction('Counter Decrement');
export const ResetAction = createAction('Counter Reset');

export const InputIncrementAction = createAction(
  'Counter Input Increment',
  props<{ value: number }>()
);
