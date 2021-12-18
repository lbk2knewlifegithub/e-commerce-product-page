import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';
import { Item, Product } from 'src/app/shared/models';

@Component({
  selector: 'lbk-item-preview',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="flex justify-between items-center gap-4">
      <div class="flex gap-3">
        <!-- product image -->
        <div>
          <img
            class="w-12 h-12 rounded-md"
            [src]="item.thumbnail"
            [alt]="item.name"
          />
        </div>
        <!-- end product image -->

        <div class="text-muted">
          <!-- name -->
          <p class="line-clamp-1">{{ item.name }}</p>
          <!-- end name -->

          <!-- prices -->
          <p class="line-clamp-1">
            {{ item.price | currency }} x {{ item.quantity }}
            <strong class="">{{ total | currency }}</strong>
          </p>
          <!-- end prices -->
        </div>
      </div>

      <!-- delete button -->
      <button (click)="delete.emit()" type="button">
        <img src="/assets/images/icon-delete.svg" alt="Trash" />
      </button>
      <!-- end delete button -->
    </div>
  `,
})
export class CartItemPreviewComponent {
  @Input() item!: Item;
  @Output() delete = new EventEmitter<void>();


  get total(): number {
    return this.item.price * this.item.quantity;
  }
}
