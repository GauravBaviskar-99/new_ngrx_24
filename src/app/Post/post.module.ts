import { NgModule } from '@angular/core';
import { PostListComponent } from './post-list/post-list.component';
import { AddPostComponent } from './add-post/add-post.component';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { postReducer } from './PostStore/post.reducer';
import { EffectsModule } from '@ngrx/effects';
import { PostEffects } from './PostStore/post.effects';

const routes: Routes = [
  {
    path: '',
    component: PostListComponent,
    children: [
      {
        path: 'postOperation',
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
    EffectsModule.forFeature([PostEffects]),
  ],
})
export class PostModule {}
