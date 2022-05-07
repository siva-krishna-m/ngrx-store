import { createSelector } from '@ngrx/store';
import { Post, PostsState } from './posts.state';
import { createFeatureSelector } from '@ngrx/store';

export const POST_STATE = "POST_STATE"

const getPostState = createFeatureSelector<PostsState>(POST_STATE);

export const getPosts = createSelector(getPostState, state => state.posts);
export const getPostById = (id: number) => createSelector(getPostState, (state: PostsState) => state.posts.find(p=> p.id == id))
