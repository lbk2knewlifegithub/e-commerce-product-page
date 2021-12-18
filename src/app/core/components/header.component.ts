import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { combineLatestWith, map, Observable, take } from 'rxjs';
import * as fromRoot from 'src/app/reducers';
import { Cart, Item } from 'src/app/shared/models';
import { CartActions, LayoutActions } from '../actions';

@Component({
  selector: 'lbk-header',
  template: `
    <header class="">
      <nav class="relative container py-4 flex justify-between items-center">
        <div class="flex gap-3 items-start">
          <!-- drawer -->
          <lbk-drawer
            class="block"
            (closed)="closeDrawer()"
            (opened)="openDrawer()"
            [open]="(openDrawer$ | async)!"
          ></lbk-drawer>
          <!-- end drawer -->

          <!-- logo -->
          <a class="inline-block" routerLink="/">
            <img src="/assets/images/logo.svg" alt="Logo" />
          </a>
          <!-- end logo -->
        </div>

        <div class="flex gap-4 items-center">
          <!-- cart -->
          <lbk-cart
            (click)="toggleCartPopup()"
            [cart]="(cart$ | async)!"
            class="block"
          ></lbk-cart>
          <!-- end cart -->

          <!-- profile -->
          <lbk-profile class="block"></lbk-profile>
          <!-- end profile -->
        </div>

        <!-- cart popup-->
        <lbk-cart-popup
          *ngIf="openCartPopup$ | async"
          (delete)="reduceQuantity($event)"
          class="block absolute w-full left-0 top-[calc(100%+10px)] z-50"
          [cart]="(cart$ | async)!"
        ></lbk-cart-popup>
        <!-- end cart popup-->
      </nav>
    </header>
  `,
})
export class HeaderComponent {
  openDrawer$!: Observable<boolean>;
  openCartPopup$!: Observable<boolean>;
  cart$!: Observable<Cart>;

  constructor(private readonly _store: Store) {
    this.openDrawer$ = _store.select(fromRoot.selectOpenDrawer);
    this.openCartPopup$ = _store.select(fromRoot.selectOpenCartPopup);

    this.cart$ = _store.select(fromRoot.selectCartState).pipe(
      combineLatestWith(this._store.select(fromRoot.selectAllCartItems)),
      map(([state, items]) => ({ timestamp: state.timestamp, items }))
    );
  }

  reduceQuantity(item: Item): void {
    this._store.dispatch(CartActions.reduceQuantity({item}));
  }

  closeDrawer() {
    this._store.dispatch(LayoutActions.closeDrawer());
  }

  openDrawer() {
    this._store.dispatch(LayoutActions.openDrawer());
  }

  toggleCartPopup() {
    this.openCartPopup$.pipe(take(1)).subscribe((open) => {
      if (open) this._store.dispatch(LayoutActions.closeCartPopup());
      else this._store.dispatch(LayoutActions.openCartPopup());
    });
  }
}
