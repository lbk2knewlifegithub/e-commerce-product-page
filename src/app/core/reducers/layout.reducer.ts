import { createReducer, on } from '@ngrx/store';
import { LayoutActions } from '../actions';

export const layoutFeatureKey = 'layout';

export interface State {
  openDrawer: boolean;
  openCartPopup: boolean;
}

const initialState: State = {
  openDrawer: false,
  openCartPopup: true
  // openCartPopup: false
};

export const reducer = createReducer(
  initialState,
  on(LayoutActions.openDrawer, (state) => ({...state, openDrawer: true })),
  on(LayoutActions.closeDrawer, (state) => ({...state, openDrawer: false })),
  on(LayoutActions.openCartPopup, (state) => ({ ...state,openCartPopup: true })),
  on(LayoutActions.closeCartPopup, (state) => ({ ...state,openCartPopup: false }))
);

export const getOpenDrawer = (state: State) => state.openDrawer;
export const getOpenCartPopup = (state: State) => state.openCartPopup;
