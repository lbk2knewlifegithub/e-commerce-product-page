import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';

@Component({
  selector: 'lbk-quantity',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="flex items-center bg-muted rounded-xl overflow-hidden">
      <!-- minus -->
      <button
        (click)="add(-1)"
        [disabled]="quantity === min"
        type="button"
        class="p-6 duration-200 hover:bg-primary-50 disabled:opacity-25"
      >
        <img src="/assets/images/icon-minus.svg" alt="Minus" />
      </button>
      <!-- end minus -->

      <p class="grow text-center font-black min-w-[35px]">
        {{ quantity }}
      </p>

      <!-- plus -->
      <button
        (click)="add(1)"
        [disabled]="quantity === max"
        type="button"
        class="p-6 duration-200 hover:bg-primary-50 disabled:opacity-25"
      >
        <img src="/assets/images/icon-plus.svg" alt="Plus" />
      </button>
      <!-- end plus -->
    </div>
  `,
})
export class QuantityComponent {
  @Input() max = 1000;
  @Input() min = 0;
  @Input() quantity = 0;
  @Output() quantityChange = new EventEmitter<number>();

  add(value: number) {
    const result = Math.min(
      Math.max(this.quantity + value, this.min),
      this.max
    );
    this.quantityChange.emit(result)
  }
}
