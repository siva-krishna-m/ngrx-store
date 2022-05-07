import { counterState } from './counter.state';
import { createFeatureSelector, createSelector } from "@ngrx/store";

const getCounterState = createFeatureSelector<counterState>('counter');

export const getCounter = createSelector(getCounterState, state => state.counter);

export const getName = createSelector(getCounterState, state => state.name);
