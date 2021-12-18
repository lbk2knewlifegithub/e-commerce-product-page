import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'lbk-cart',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <button class="" type="button">
      <img class="inline-block" src="/assets/images/icon-cart.svg" alt="Cart" />
    </button>
  `,
})
export class CartComponent {}
