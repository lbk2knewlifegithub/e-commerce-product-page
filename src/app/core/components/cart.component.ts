import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Cart } from 'src/app/shared/models';

@Component({
  selector: 'lbk-cart',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="relative">
      <button class="" type="button">
        <img
          class="inline-block"
          src="/assets/images/icon-cart.svg"
          alt="Cart"
        />
      </button>

      <!-- quantity -->
      <div *ngIf="quantity > 0" class="absolute top-[-8px] right-[-12px]">
        <p
          class="text-center text-white bg-primary px-2 rounded-full text-xs font-bold"
        >
          {{ quantity }}
        </p>
      </div>
      <!-- end quantity -->
    </div>
  `,
})
export class CartComponent {
  @Input() cart!: Cart;

  get quantity(): number {
    return Object.values(this.cart.items).reduce(
      (acc, item) => acc + item.quantity,
      0
    );
  }
}
