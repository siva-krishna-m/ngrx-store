import { AppState } from './app.state';
import { Action, createReducer, on } from '@ngrx/store';
import { setErrorMessage, setLoadingSpinner } from './shared.actions';
import { initialState, SharedState } from './shared.state';
const sharedReducer = createReducer(initialState,
  on(setLoadingSpinner, (state, action) => ({ ...state, showLoading: action.status })),
  on(setErrorMessage, (state, action) => ({ ...state, errorMsg: action.message }))
  )

export const SharedReducer = (state: SharedState | undefined, action: Action) => sharedReducer(state, action);
