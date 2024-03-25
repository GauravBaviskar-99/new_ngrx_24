import { createFeatureSelector, createSelector } from '@ngrx/store';
import { counterState } from './counter.state';

const getCounter = createFeatureSelector<counterState>('counter');

export const getCounterSelector = createSelector(getCounter, (state) => {
  return state.counter;
});
