import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';
import { Cart, Item } from 'src/app/shared/models';

@Component({
  selector: 'lbk-cart-popup',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="">
      <div class="bg-white p-5 rounded-lg w-full shadow-lg">
        <!-- cart title -->
        <p class="font-bold pb-2 border-b-2 border-gray-200">Cart</p>
        <!-- end cart title -->

        <!-- empty -->
        <ng-container *ngIf="isEmpty; else items">
          <div class="min-h-[150px] grid place-content-center">
            <p class="text-muted text-center font-bold">Your cart is empty.</p>
          </div>
        </ng-container>
        <!-- end empty -->

        <!-- items -->
        <ng-template #items>
          <lbk-item-preview-list
            (delete)="delete.emit($event)"
            class="block my-6"
            [items]="cartItems"
          ></lbk-item-preview-list>

          <!-- checkout -->
          <button
            (click)="checkout.emit()"
            type="button"
            class="w-full py-2 btn btn-primary shadow-md shadow-primary mt-2"
          >
            Checkout
          </button>
          <!-- end checkout -->
        </ng-template>
        <!-- end items -->
      </div>
    </div>
  `,
})
export class CartPopupComponent {
  @Input() cart!: Cart;
  @Output() checkout = new EventEmitter<void>();
  @Output() delete = new EventEmitter<Item>();

  get isEmpty(): boolean {
    return Object.keys(this.cart.items).length == 0;
  }

  get cartItems(): Item[] {
    return Object.values(this.cart.items) as Item[];
  }
}
