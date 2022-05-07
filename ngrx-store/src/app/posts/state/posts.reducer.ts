import { createReducer, on } from '@ngrx/store';
import { addPost, deletePost, updatePost } from './posts.actions';
import { initialState } from './posts.state';

const _postsReducer = createReducer(initialState,
  on(addPost, (state, action) => ({ ...state, posts: [...state.posts, {...action.post, id: state.posts.length+1}] })),
  on(updatePost, (state, action) => ({ ...state, posts: state.posts.map(post => post.id === action.post.id ? action.post : post) })),
  on(deletePost, (state, { id }) => ({ ...state, posts: state.posts.filter(post => post.id !== id) }))
  )

export const postsReducer = (state: any, action: any) => _postsReducer(state, action)
