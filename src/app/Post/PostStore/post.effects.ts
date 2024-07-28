import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { PostService } from '../Services/post.service';
import { Load_Posts, loadPost, loadPostsSuccess } from './post.actions';
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
}
