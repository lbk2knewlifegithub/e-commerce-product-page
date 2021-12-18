import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { Item } from 'src/app/shared/models';
import { CartActions } from '../actions';

export const cartFeatureKey = 'cart';

export interface State extends EntityState<Item> {
  timestamp: number;
  // cart: Cart;
}

export const adapter: EntityAdapter<Item> = createEntityAdapter<Item>({
  selectId: (item: Item) => item.id,
  sortComparer: false,
});

const initialState: State = adapter.getInitialState({ timestamp: Date.now() });

export const reducer = createReducer(
  initialState,
  // Delete item
  on(CartActions.deleteItem, (state, { id }) => adapter.removeOne(id, state)),
  // Set quantity
  on(CartActions.setQuantity, (state, { id, quantity }) => {
    console.log(id);
    return adapter.updateOne({ id, changes: { quantity } }, state);
  }),
  // Add to cart
  on(CartActions.addToCart, (state, { product, quantity }) => {
    const item = state.entities[product.id];
    const {
      id,
      name,
      price: { sale, value: priceValue },
      images,
    } = product;

    // When product not in cart, add it
    if (!item) {
      const newItem: Item = {
        id,
        name,
        thumbnail: images[0].thumbnail,
        price: sale * priceValue,
        quantity,
      };
      return adapter.addOne(newItem, state);
    }

    // When product is already in cart, increase quantity

    return adapter.updateOne(
      { id, changes: { quantity: item.quantity + quantity } },
      state
    );
  })
);

export const getItems = (state: State) => state.entities;
