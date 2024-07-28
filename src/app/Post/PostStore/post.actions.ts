import { Action, createAction, props } from '@ngrx/store';
import { Post } from './post.state';

// export enum postActionTypes {
//   submitPost = 'submitPost',
// }

// export class submitPost implements Action {
//   readonly type = postActionTypes.submitPost;
//   constructor(
//     public post: { postId: string; postTitle: string; postDescription: string }
//   ) {}
// }

export const Load_Posts = '[Posts Page] load posts';
export const Load_Posts_Success = '[Post Page] load posts success';
export const ADD_POST_ACTION_SUCCESS = '[Post Page] add post action success';
export const UPDATE_POST_ACTION_SUCCESS =
  '[Post Page] update post action success';

export const DELET_POST_ACTION_SUCCESS =
  '[Post Page] delete post action success';

export const postAction = createAction(
  'PostAction',
  props<{
    post: Post;
  }>()
);

export const updatePostAction = createAction(
  'updatePostAction',
  props<{
    post: Post;
  }>()
);

export const deletePostAction = createAction(
  'deletePostAction',
  props<{
    id: string | number;
  }>()
);

export const loadPost = createAction(Load_Posts);
export const loadPostsSuccess = createAction(
  Load_Posts_Success,
  props<{ posts: Post[] }>()
);

export const addPostSuccess = createAction(
  ADD_POST_ACTION_SUCCESS,
  props<{ post: Post }>()
);

export const updatePostActionSuccess = createAction(
  UPDATE_POST_ACTION_SUCCESS,
  props<{ post: Post }>()
);

export const DeletePostActionSuccess = createAction(
  DELET_POST_ACTION_SUCCESS,
  props<{ id: string | number }>()
);
