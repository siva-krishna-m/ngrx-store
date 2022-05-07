import { loginSuccess } from './auth.actions';
import { createReducer, on } from '@ngrx/store';
import { AuthState, initialState } from './auth.state';

const authReducer = createReducer(initialState,
  on(loginSuccess, (state, action) => ({ ...state, user: action.user }))
  )

export const AuthReducer = (state: any, action: any) => {
  return authReducer(state, action)
}
