import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PostState } from './post.state';
import {
  getCurrentRoute,
  getCurrentRouterState,
} from 'src/app/AppStore/roter.selector';
import { RouterStateUrl } from 'src/app/AppStore/custom-route-serializer';

const getPosts = createFeatureSelector<PostState>('post');

export const getPostSelector = createSelector(getPosts, (state) => {
  return state.posts;
});

export const getPostById = createSelector(
  getPosts,
  getCurrentRoute,
  (state: PostState, currentRoute: RouterStateUrl) => {
    if (currentRoute.queryParams['operation'] == 'update') {
      return {
        ...state.posts.find(
          (post) => post.id == currentRoute.queryParams['id']
        ),
        operation: 'update',
      };
    }
    if (currentRoute.queryParams['operation'] == 'delete') {
      return {
        ...state.posts.find(
          (post) => post.id == currentRoute.queryParams['id']
        ),
        operation: 'delete',
      };
    }
    return null;
  }
);
