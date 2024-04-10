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
