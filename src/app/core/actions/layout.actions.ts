import { createAction } from '@ngrx/store';

export const openDrawer = createAction('[Layout] Open Drawer');
export const closeDrawer = createAction('[Layout] Close Drawer');

export const openCartPopup = createAction('[Cart] Open Cart Popup');
export const closeCartPopup = createAction('[Cart] Close Cart Popup');
