import { createAction, props } from '@ngrx/store';
import { Item, Product } from 'src/app/shared/models';

export const deleteItem = createAction(
  '[Cart] Delete',
  props<{ id: number }>()
);

export const addToCart = createAction(
  '[Cart] Add To Cart',
  props<{ product: Product; quantity: number }>()
);

export const reduceQuantity = createAction(
  '[Cart] Reduce Quantity',
  props<{ item: Item }>()
);

export const setQuantity = createAction(
  '[Cart] Set Quantity',
  props<{ id: number; quantity: number }>()
);
