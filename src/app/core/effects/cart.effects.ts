import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map } from 'rxjs';
import { CartActions } from '../actions';

@Injectable({ providedIn: 'root' })
export class CartEffects {
  reduceQuantity$ = createEffect(
    () =>
      this._actions$.pipe(
        ofType(CartActions.reduceQuantity),
        map(({ item }) => {
          if (item.quantity == 1)
            return CartActions.deleteItem({ id: item.id });
          return CartActions.setQuantity({
            id: item.id,
            quantity: item.quantity - 1,
          });
        })
      ),
  );

  constructor(private readonly _actions$: Actions) {}
}
