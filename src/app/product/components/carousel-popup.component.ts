import {
  animate,
  animateChild,
  group,
  query,
  style,
  transition,
  trigger
} from '@angular/animations';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';
import { scaleInOut } from 'src/app/shared/animations/scale.anim';
import { ProductImage } from 'src/app/shared/models';

@Component({
  selector: 'lbk-carousel-popup',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div
      @container
      *ngIf="open"
      class="fixed top-0 left-0 w-full h-screen grid place-content-center bg-black/75"
    >
      <div @scaleInOut class="">
        <!-- close button -->
        <button
          (click)="openChange.emit(false)"
          type="button"
          class="block text-white text-4xl font-black ml-auto duration-300 hover:text-primary hover:rotate-180"
        >
          <i class="fas fa-times"></i>
        </button>
        <!-- end close button -->

        <!-- carousel -->
        <lbk-carousel-thumbnails
          class="block max-w-lg mt-8"
          [index]="index"
          [images]="images"
          [v2]="true"
        ></lbk-carousel-thumbnails>
        <!-- end carousel -->
      </div>
    </div>
  `,
  animations: [
    scaleInOut(),
    trigger('container', [
      transition(':enter', [
        group([
          query('@scaleInOut', animateChild()),
          style({ opacity: 0 }),
          animate('200ms'),
        ]),
      ]),
      transition(':leave', [
        group([query('@scaleInOut', animateChild()), animate('10ms 350ms')]),
      ]),
    ]),
  ],
})
export class CarouselPopupComponent {
  @Input() images!: ProductImage[];
  @Input() index!: number;
  @Input() open!: boolean;
  @Output() openChange = new EventEmitter<boolean>();
}
