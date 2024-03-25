import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counterAPP/counter/counter.component';
import { PostListComponent } from './Post/post-list/post-list.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'counter', component: CounterComponent },
  { path: 'post', component: PostListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
