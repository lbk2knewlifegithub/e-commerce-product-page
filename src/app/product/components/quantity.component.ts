import {
  ChangeDetectionStrategy,
  Component, EventEmitter, Input,
  Output
} from '@angular/core';

@Component({
  selector: 'lbk-quantity',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="flex items-center bg-muted rounded-xl overflow-hidden">
      <!-- minus -->
      <button type="button" class="p-6 duration-200 hover:bg-primary-50">
        <img src="/assets/images/icon-minus.svg" alt="Minus" />
      </button>
      <!-- end minus -->

      <p class="grow text-center font-black ">
        {{ quantity }}
      </p>

      <!-- plus -->
      <button type="button" class="p-6 duration-200 hover:bg-primary-50">
        <img src="/assets/images/icon-plus.svg" alt="Plus" />
      </button>
      <!-- end plus -->
    </div>
  `,
})
export class QuantityComponent {
  @Input() quantity!: number;
  @Output() quantityChange = new EventEmitter<number>();
}
