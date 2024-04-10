import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/AppStore/app.state';
import { Post, PostState } from '../PostStore/post.state';
import { getPostSelector } from '../PostStore/post.selectors';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
})
export class PostListComponent implements OnInit {
  allPosts$!: Observable<Post[]>;
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.allPosts$ = this.store.select(getPostSelector);
  }
}
