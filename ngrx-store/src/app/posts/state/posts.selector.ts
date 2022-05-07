import { createSelector } from '@ngrx/store';
import { Post, PostsState } from './posts.state';
import { createFeatureSelector } from '@ngrx/store';

const getPostState = createFeatureSelector<PostsState>('posts');

export const getPosts = createSelector(getPostState, state => state.posts);
export const getPostById = (id: number) => createSelector(getPostState, (state: PostsState) => state.posts.find(p=> p.id == id))
