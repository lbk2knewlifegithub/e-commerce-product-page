import { InjectionToken } from '@angular/core';
import * as fromRouter from '@ngrx/router-store';
import {
  Action,
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import * as fromCart from 'src/app/core/reducers/cart.reducer';
import * as fromLayout from 'src/app/core/reducers/layout.reducer';
import { environment } from '../../environments/environment';

const rootKey = 'Root reducers token';

export interface State {
  [fromLayout.layoutFeatureKey]: fromLayout.State;
  [fromCart.cartFeatureKey]: fromCart.State;
  router: fromRouter.RouterReducerState<any>;
}

export const ROOT_REDUCERS = new InjectionToken<
  ActionReducerMap<State, Action>
>(rootKey, {
  factory: () => ({
    [fromLayout.layoutFeatureKey]: fromLayout.reducer,
    [fromCart.cartFeatureKey]: fromCart.reducer,
    router: fromRouter.routerReducer,
  }),
});

// console.log all actions
export function logger(reducer: ActionReducer<State>): ActionReducer<State> {
  return (state, action) => {
    const result = reducer(state, action);
    console.groupCollapsed(action.type);
    console.log('prev state', state);
    console.log('action', action);
    console.log('next state', result);
    console.groupEnd();

    return result;
  };
}

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? [logger]
  : [];

/**
 * Layout Selectors
 */
export const selectLayoutState = createFeatureSelector<fromLayout.State>(
  fromLayout.layoutFeatureKey
);

export const selectOpenDrawer = createSelector(
  selectLayoutState,
  fromLayout.getOpenDrawer
);

export const selectOpenCartPopup = createSelector(
  selectLayoutState,
  fromLayout.getOpenCartPopup
);

/**
 * Cart Selectors
 */
export const selectCartState = createFeatureSelector<fromCart.State>(
  fromCart.cartFeatureKey
);

export const { selectAll: selectAllCartItems } =
  fromCart.adapter.getSelectors(selectCartState);

/**
 * Router Selectors
 */
export const { selectRouteData } = fromRouter.getSelectors();
