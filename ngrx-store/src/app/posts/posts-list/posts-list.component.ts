import { getPosts } from './../state/posts.selector';
import { Observable } from 'rxjs';
import { AppState } from './../../store/app.state';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { Post } from '../state/posts.state';
import { deletePost } from '../state/posts.actions';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit {

  posts$!: Observable<Post[]>

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.posts$ = this.store.select(getPosts);
  }

  deletePost(id: number) {
    if(confirm("Are you sure")) {
      this.store.dispatch(deletePost({id}))
    }
  }

}
