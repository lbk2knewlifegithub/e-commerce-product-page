import { createReducer, on } from '@ngrx/store';
import { LayoutActions } from '../actions';

export const layoutFeatureKey = 'layout';

export interface State {
  openDrawer: boolean;
}

const initialState: State = {
  openDrawer: false,
};

export const reducer = createReducer(
  initialState,
  on(LayoutActions.openDrawer, (_) => ({ openDrawer: true })),
  on(LayoutActions.closeDrawer, (_) => ({ openDrawer: false }))
);

export const getOpenDrawer = (state: State) => state.openDrawer;
