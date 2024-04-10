import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/AppStore/app.state';
import {
  deletePostAction,
  postAction,
  updatePostAction,
} from '../PostStore/post.actions';
import { ActivatedRoute, Route, Router, RouterModule } from '@angular/router';
import { Post } from '../PostStore/post.state';
import { getPostById } from '../PostStore/post.selectors';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css'],
})
export class AddPostComponent implements OnInit {
  postForm!: FormGroup;
  post!: Post;
  isEditMode: boolean = false;
  postId!: number;
  constructor(
    private store: Store<AppState>,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  get title() {
    return this.postForm.get('title');
  }

  get description() {
    return this.postForm.get('description');
  }

  ngOnInit(): void {
    this.postForm = new FormGroup({
      title: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
      description: new FormControl('', [
        Validators.required,
        Validators.minLength(10),
      ]),
    });

    this.route.params.subscribe((params) => {
      if (params['id']) {
        this.isEditMode = true;
        this.postId = params['id'];
        this.store
          .select(getPostById, { id: params['id'] })
          .subscribe((post) => {
            console.log(post);
            this.postForm.setValue({
              title: post?.title,
              description: post?.description,
            });
          });
      } else if (params['del-id']) {
        if (confirm('Do You Really Want to Delete the Record ... ?'))
          this.store.dispatch(deletePostAction({ id: params['del-id'] }));
        this.router.navigate(['post']);
      }
    });
  }

  onPostSubmit(posform: FormGroup) {
    console.log(posform);
    if (!this.isEditMode) {
      this.store.dispatch(postAction({ post: posform.value }));
    } else {
      this.store.dispatch(
        updatePostAction({ post: { ...posform.value, id: this.postId } })
      );
    }

    this.router.navigate(['post']);
  }
}
