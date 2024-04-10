import { createReducer, on } from '@ngrx/store';
import { PostState, initialState } from './post.state';
import { deletePostAction, postAction, updatePostAction } from './post.actions';

const _postReducer = createReducer(
  initialState,
  on(postAction, (state: PostState, action) => {
    let post = { ...action.post };
    post.id = state.posts.length + 1;
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
  })
);
export function postReducer(state: any, action: any) {
  return _postReducer(state, action);
}
