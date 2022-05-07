import { createReducer } from '@ngrx/store';
import { initialState } from './posts.state';

const _postsReducer = createReducer(initialState)

export const postsReducer = (state: any, action: any) => _postsReducer(state, action)
