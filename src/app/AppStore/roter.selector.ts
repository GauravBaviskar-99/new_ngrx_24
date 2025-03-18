import { RouterReducerState } from '@ngrx/router-store';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { RouterStateUrl } from './custom-route-serializer';

export const getCurrentRouterState =
  createFeatureSelector<RouterReducerState<RouterStateUrl>>('router');

export const getCurrentRoute = createSelector(
  getCurrentRouterState,
  (router) => {
    return router.state;
  }
);
