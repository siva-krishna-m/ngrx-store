import { initialState } from './../../counter/state/counter.state';
import { createReducer } from '@ngrx/store';
import { AuthState } from './auth.state';

const authReducer = createReducer(initialState)

export const AuthReducer = (state: any, action: any) => {
  return authReducer(state, action)
}
