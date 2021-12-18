import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'lbk-arrow-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <button
      type="button"
      class="w-10 h-10 bg-white text-xl rounded-full grid place-content-center hover:text-primary"
    >
      <i class="{{src}}"></i>
    </button>
  `,
})
export class ArrowButtonComponent {
  @Input() name!: 'left' | 'right';

  // get src(): string {
  //   return `/assets/images/icon-${this.name}.svg`;
  // }

  get src(): string {
    return `fas fa-angle-${this.name}`;
  }
}
