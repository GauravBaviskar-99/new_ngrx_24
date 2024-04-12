import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counterAPP/counter/counter.component';
import { PostListComponent } from './Post/post-list/post-list.component';
import { AddPostComponent } from './Post/add-post/add-post.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'counter',
    loadChildren: () =>
      import('./counterAPP/counter.module').then((m) => m.counterModule),
  },
  {
    path: 'post',
    loadChildren: () => import('./Post/post.module').then((m) => m.PostModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
