import { increment, decrement, reset, customIncrement, changeName } from './counter.actions';
import { createReducer, on } from "@ngrx/store"
import { initialState } from './counter.state';

const _counterReducer = createReducer(initialState,
  on(increment, (state) =>  ({ ...state, counter: state.counter+1 })),
  on(decrement, (state) => ({ ...state, counter: state.counter-1 })),
  on(reset, (state) => ({ ...state, counter: 0 })),
  on(customIncrement, (state, action) => ({ ...state, counter: state.counter + +action.value })),
  on(changeName, (state, action) => ({ ...state, name: action.name }))
  )

export const counterReducer = (state: any, action: any) => {
  return _counterReducer(state, action)
}
