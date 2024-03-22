import { createAction } from '@ngrx/store';

export const IncrementAction = createAction('Counter Increment');
export const DecrementAction = createAction('Counter Decrement');
export const ResetAction = createAction('Counter Reset');
