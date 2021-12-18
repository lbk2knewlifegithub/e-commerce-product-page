import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { CartActions } from 'src/app/core/actions';
import { Product } from 'src/app/shared/models';
import * as fromData from '../../../shared/data';

@Component({
  selector: 'lbk-product-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './view-product-page.component.html',
})
export class ViewProductPageComponent {
  product: Product = fromData.product;
  quantity = 0;
  carouselPopup = false;
  indexImageCarousel = -1;

  constructor(private readonly _store: Store) {
    // setTimeout(() => {
    //   this.addToCart(this.product, 10);
    // }, 200);
  }

  addToCart(product: Product, quantity: number = 1) {
    if (!quantity) {
      alert('Please select a quantity');
      return;
    }

    this._store.dispatch(CartActions.addToCart({ product, quantity }));
  }

  onImageCarousel(index: number) {
    this.carouselPopup = true;
    this.indexImageCarousel = index;
  }
}
