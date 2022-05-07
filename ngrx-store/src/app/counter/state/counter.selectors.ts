import { counterState } from './counter.state';
import { createFeatureSelector, createSelector } from "@ngrx/store";

export const COUNTER_STATE = "COUNTER_STATE";
const getCounterState = createFeatureSelector<counterState>(COUNTER_STATE);

export const getCounter = createSelector(getCounterState, state => state.counter);

export const getName = createSelector(getCounterState, state => state.name);
