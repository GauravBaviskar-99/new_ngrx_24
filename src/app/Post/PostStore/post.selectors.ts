import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PostState } from './post.state';

const getPosts = createFeatureSelector<PostState>('post');

export const getPostSelector = createSelector(getPosts, (state) => {
  return state.posts;
});

export const getPostById = createSelector(
  getPosts,
  (state: PostState, props: any) => {
    return state.posts.find((post) => post.id == props.id);
  }
);
