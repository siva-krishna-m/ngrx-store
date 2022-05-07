import { Post } from './../state/posts.state';
import { AppState } from './../../store/app.state';
import { Store } from '@ngrx/store';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { getPostById } from '../state/posts.selector';
import { updatePost } from '../state/posts.actions';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {

  postForm!: FormGroup;
  post!: Post;

  constructor(private route: ActivatedRoute, private store: Store<AppState>, private router: Router) {
    this.postForm = new FormGroup({
      title: new FormControl('', [Validators.required, Validators.minLength(6)]),
      description: new FormControl('', [Validators.required])
    })
    this.route.paramMap.subscribe(params => {
      const id = Number(params.get('id'));
      this.store.select(getPostById(id)).subscribe(data => this.post = data!);
      this.postForm.patchValue(this.post)
    });

   }

  ngOnInit() {
  }

  updatePost() {
    let post = {
      id: this.post.id,
      title: this.postForm.value.title,
      description: this.postForm.value.description
    }
    this.store.dispatch(updatePost({post}));
    this.postForm.reset();
    this.router.navigate(['/posts']);
  }

}
