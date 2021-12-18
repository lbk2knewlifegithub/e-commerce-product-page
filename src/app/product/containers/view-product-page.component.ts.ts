import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { CartActions } from 'src/app/core/actions';
import { Product } from 'src/app/shared/models';
import * as fromData from '../../shared/data';

@Component({
  selector: 'lbk-product-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <main class="lg:mt-20">
      <div class="lg:container lg:grid lg:grid-cols-2 lg:gap-20">
        <!-- carousel mobile and tablet -->
        <lbk-carousel
          class="block h-full aspect-[4/3] md:aspect-video lg:hidden"
          [productImages]="product.images"
        ></lbk-carousel>
        <!-- end carousel mobile and tablet -->

        <!-- carousel desktop -->
        <div class="lg:pl-16">
          <lbk-carousel-thumbnails class="block" [images]="product.images"></lbk-carousel-thumbnails>
        </div>
        <!-- end carousel desktop -->

        <div class="container lg:px-0 mt-4 lg:order-last">
          <!-- company -->
          <h3
            class="text-primary uppercase tracking-wider font-black text-sm md:text-lg lg:text-sm"
          >
            {{ product.company }}
          </h3>
          <!-- end company -->

          <!-- name -->
          <h2 class="tracking-wide font-black text-3xl mt-4 md:text-5xl">
            {{ product.name }}
          </h2>
          <!-- end name -->

          <!-- description -->
          <p class="text-muted font-medium mt-4 md:text-lg lg:text-base">
            {{ product.description }}
          </p>
          <!-- end description -->

          <!-- price -->
          <lbk-price
            class="my-6 block md:my-8 lg:my-12"
            [price]="product.price"
          ></lbk-price>
          <!-- end price -->

          <div class="flex flex-col gap-4 md:gap-8 lg:flex-row">
            <!-- quantity -->
            <lbk-quantity [(quantity)]="quantity"></lbk-quantity>
            <!-- end quantity -->

            <!-- add to cart -->
            <lbk-add-to-cart
              (click)="addToCart(product, quantity)"
              class="block"
            ></lbk-add-to-cart>
          </div>
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
