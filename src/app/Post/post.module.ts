import { NgModule } from '@angular/core';
import { PostListComponent } from './post-list/post-list.component';
import { AddPostComponent } from './add-post/add-post.component';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { postReducer } from './PostStore/post.reducer';

const routes: Routes = [
  {
    path: '',
    component: PostListComponent,
    children: [
      {
        path: 'add',
        component: AddPostComponent,
      },
      {
        path: 'update/:id',
        component: AddPostComponent,
      },
      {
        path: 'delete/:del-id',
        component: AddPostComponent,
      },
    ],
  },
];
@NgModule({
  declarations: [PostListComponent, AddPostComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('post', postReducer),
  ],
})
export class PostModule {}
