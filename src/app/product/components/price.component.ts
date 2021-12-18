import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Price } from '../models';

@Component({
  selector: 'lbk-price',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="flex justify-between items-center">
      <div class="flex items-center gap-4">
        <!-- price saled -->
        <p class="font-black text-3xl">{{ priceSaled | currency }}</p>
        <!-- end price saled -->

        <!-- sale -->
        <p class="badge-primary">{{ sale }}</p>
        <!-- end sale -->
      </div>

      <!-- actual price -->
      <p
        class="text-muted-50 font-semibold line-through decoration-muted-50 decoration-4"
      >
        {{ price.value | currency }}
      </p>
      <!-- end actual price -->
    </div>
  `,
})
export class PriceComponent {
  @Input() price!: Price;

  get sale(): string {
    return this.price.sale * 100 + '%';
  }

  get priceSaled(): number {
    return this.price.value * (1 - this.price.sale);
  }
}
