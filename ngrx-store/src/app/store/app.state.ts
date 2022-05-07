import { SharedReducer } from './shared.reducer';
import { SharedState } from './shared.state';
import { counterReducer } from './../counter/state/counter.reducer';
import { PostsState } from './../posts/state/posts.state';
import { counterState } from './../counter/state/counter.state';
import { postsReducer } from '../posts/state/posts.reducer';
import { SHARED_STATE_NAME } from './shared.selector';

export interface AppState {
  [SHARED_STATE_NAME]: SharedState
}

export const appReducer = {
  [SHARED_STATE_NAME]: SharedReducer
}
