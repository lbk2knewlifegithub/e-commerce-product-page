import { Component } from '@angular/core';

@Component({
  selector: 'lbk-add-to-cart',
  template: `
    <button
      type="button"
      class="bg-primary w-full justify-center flex gap-2 py-4 px-10 rounded-lg shadow-primary/80 shadow-xl hover:opacity-50"
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
