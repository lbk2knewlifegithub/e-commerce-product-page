import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { CartActions } from 'src/app/core/actions';
import { Product } from 'src/app/shared/models';
import * as fromData from '../../shared/data';

@Component({
  selector: 'lbk-product-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <main>
      <div class="">
        <lbk-carousel
          class="block h-full aspect-[4/3] md:aspect-video"
          [productImages]="product.images"
        ></lbk-carousel>

        <div class="container  mt-4">
          <!-- company -->
          <h3 class="text-primary uppercase tracking-wider font-black text-sm">
            {{ product.company }}
          </h3>
          <!-- end company -->

          <!-- name -->
          <h2 class="tracking-wide font-black text-3xl mt-4">
            {{ product.name }}
          </h2>
          <!-- end name -->

          <!-- description -->
          <p class="text-muted font-medium mt-4">
            {{ product.description }}
          </p>
          <!-- end description -->

          <!-- price -->
          <lbk-price class="my-6 block" [price]="product.price"></lbk-price>
          <!-- end price -->

          <!-- quantity -->
          <lbk-quantity [(quantity)]="quantity"></lbk-quantity>
          <!-- end quantity -->

          <!-- add to cart -->
          <lbk-add-to-cart
            (click)="addToCart(product, quantity)"
            class="block mt-4"
          ></lbk-add-to-cart>
          <!-- end add to cart -->
        </div>
      </div>
    </main>
  `,
})
export class ViewProductPageComponent {
  product: Product = fromData.product;
  quantity = 0;

  constructor(private readonly _store: Store) {
    setTimeout(() => {
      this.addToCart(this.product, 10);
    }, 200);
  }

  addToCart(product: Product, quantity: number = 1) {
    if (!quantity) {
      alert('Please select a quantity');
      return;
    }

    this._store.dispatch(CartActions.addToCart({ product, quantity }));
  }
}
