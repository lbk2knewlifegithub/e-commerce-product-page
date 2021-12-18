import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'lbk-arrow-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <button
      type="button"
      class="w-10 h-10 bg-white rounded-full grid place-content-center"
    >
      <img [src]="src" [alt]="name | titlecase" />
    </button>
  `,
})
export class ArrowButtonComponent {
  @Input() name!: 'previous' | 'next';

  get src(): string {
    return `/assets/images/icon-${this.name}.svg`;
  }
}
