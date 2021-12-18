import { Component } from '@angular/core';

@Component({
  selector: 'lbk-add-to-cart',
  template: `
    <button
      type="button"
      class="btn btn-primary w-full justify-center flex gap-2"
    >
      <!-- cart icon -->
      <img src="/assets/images/icon-cart-white.svg" alt="Cart" />
      <!-- end cart icon -->

      <p class="font-bold tracking-wide text-center text-inverted text-sm">
        Add to cart
      </p>
    </button>
  `,
})
export class AddToCardComponent {}
