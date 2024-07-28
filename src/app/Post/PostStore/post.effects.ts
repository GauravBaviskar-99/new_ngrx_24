import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { PostService } from '../Services/post.service';
import {
  ADD_POST_ACTION_SUCCESS,
  Load_Posts,
  addPostSuccess,
  loadPost,
  loadPostsSuccess,
  postAction,
} from './post.actions';
import { mergeMap, map } from 'rxjs';

@Injectable()
export class PostEffects {
  constructor(private actions$: Actions, private postService: PostService) {}

  loadPost$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadPost),
      mergeMap((action) => {
        return this.postService.getPosts().pipe(
          map((posts) => {
            return loadPostsSuccess({ posts });
          })
        );
      })
    );
  });

  addPost$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(postAction),
      mergeMap((action) => {
        return this.postService.addPost(action.post).pipe(
          map((data) => {
            const post = { ...action.post, id: data.name };
            return addPostSuccess({ post });
          })
        );
      })
    );
  });
}
