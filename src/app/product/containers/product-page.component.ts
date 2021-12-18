import { ChangeDetectionStrategy, Component } from '@angular/core';
import * as fromData from '../data';
import { Product } from '../models';

@Component({
  selector: 'lbk-product-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <main>
      <div class="">
        <lbk-carousel class="block h-full aspect-square md:aspect-video" [productImages]="product.images"></lbk-carousel>

        <div class="container grid mt-4 gap-4">
          <!-- company -->
          <h3 class="text-primary uppercase tracking-wider font-black text-sm">
            {{ product.company }}
          </h3>
          <!-- end company -->

          <!-- name -->
          <h2 class="tracking-wide font-black text-3xl">{{ product.name }}</h2>
          <!-- end name -->

          <!-- description -->
          <p class="text-muted font-medium">
            {{ product.description }}
          </p>
          <!-- end description -->

          <!-- price -->
          <lbk-price [price]="product.price"></lbk-price>
          <!-- end price -->

          <!-- quantity -->
          <lbk-quantity [quantity]="quantity"></lbk-quantity>
          <!-- end quantity -->

          <!-- add to cart -->
          <lbk-add-to-cart class="block"></lbk-add-to-cart>
          <!-- end add to cart -->
        </div>
      </div>
    </main>
  `,
})
export class ProductPageComponent {
  product: Product = fromData.product;
  quantity: number = 0;
}
