import { createReducer, on } from '@ngrx/store';
import { PostState, initialState } from './post.state';
import {
  addPostSuccess,
  deletePostAction,
  loadPostsSuccess,
  updatePostAction,
} from './post.actions';

const _postReducer = createReducer(
  initialState,
  on(addPostSuccess, (state: PostState, action) => {
    let post = { ...action.post };
    return {
      ...state,
      posts: [...state.posts, post],
    };
  }),
  on(updatePostAction, (state, action) => {
    let updatedPost = state.posts.map((post) => {
      return post.id == action.post.id ? action.post : post;
    });
    return {
      ...state,
      posts: updatedPost,
    };
  }),
  on(deletePostAction, (state, action) => {
    let updatedPost = state.posts.filter((post) => post.id != action.id);

    return {
      ...state,
      posts: updatedPost,
    };
  }),
  on(loadPostsSuccess, (state, action) => {
    return {
      ...state,
      posts: action.posts,
    };
  })
);
export function postReducer(state: any, action: any) {
  return _postReducer(state, action);
}
