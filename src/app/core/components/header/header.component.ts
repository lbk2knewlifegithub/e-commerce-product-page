import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  combineLatestWith,
  debounceTime,
  fromEvent,
  map,
  Observable,
  Subscription,
  take
} from 'rxjs';
import * as fromRoot from 'src/app/reducers';
import { slideInTop } from 'src/app/shared/animations';
import { Cart, Item } from 'src/app/shared/models';
import { CartActions, LayoutActions } from '../../actions';

@Component({
  selector: 'lbk-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [slideInTop()],
})
export class HeaderComponent implements OnDestroy, OnInit {
  openDrawer$!: Observable<boolean>;
  openCartPopup$!: Observable<boolean>;
  cart$!: Observable<Cart>;
  subscription!: Subscription;

  constructor(private readonly _store: Store) {
    this.openDrawer$ = _store.select(fromRoot.selectOpenDrawer);
    this.openCartPopup$ = _store.select(fromRoot.selectOpenCartPopup);

    this.cart$ = _store.select(fromRoot.selectCartState).pipe(
      combineLatestWith(this._store.select(fromRoot.selectAllCartItems)),
      map(([state, items]) => ({ timestamp: state.timestamp, items }))
    );
  }

  ngOnInit(): void {
    // detect user click outside of cart popup will close it
    this.subscription = fromEvent(document.body, 'click')
      .pipe(debounceTime(200))
      .subscribe((event) => {
        const target = event.target as HTMLElement;
        if (target.closest('.cart')) return;
        if (target.closest('#cart-popup')) return;
        this._store.dispatch(LayoutActions.closeCartPopup());
      });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  reduceQuantity(item: Item): void {
    this._store.dispatch(CartActions.reduceQuantity({ item }));
  }

  closeDrawer() {
    this._store.dispatch(LayoutActions.closeDrawer());
  }

  openDrawer() {
    this._store.dispatch(LayoutActions.openDrawer());
  }

  toggleCartPopup() {
    this.openCartPopup$.pipe(take(1)).subscribe((open) => {
      if (open) {
        this._store.dispatch(LayoutActions.closeCartPopup());
      } else {
        this._store.dispatch(LayoutActions.openCartPopup());
      }
    });
  }
}
