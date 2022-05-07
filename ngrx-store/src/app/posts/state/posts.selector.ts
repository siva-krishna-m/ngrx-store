import { createSelector } from '@ngrx/store';
import { PostsState } from './posts.state';
import { createFeatureSelector } from '@ngrx/store';

const getPostState = createFeatureSelector<PostsState>('posts');

export const getPosts = createSelector(getPostState, state => state.posts);
