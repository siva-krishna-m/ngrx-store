import { EditPostComponent } from './posts/edit-post/edit-post.component';
import { AddPostComponent } from './posts/add-post/add-post.component';
import { PostsListComponent } from './posts/posts-list/posts-list.component';
import { CounterComponent } from './counter/counter/counter.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "counter",    loadChildren: () => import('./counter/counter.module').then((m) => m.CounterModule)},
  { path: "posts", loadChildren: () => import('./posts/posts.module').then((m)=> m.PostsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
