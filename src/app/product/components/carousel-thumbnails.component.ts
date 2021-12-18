import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';
import { ProductImage } from 'src/app/shared/models';

@Component({
  selector: 'lbk-carousel-thumbnails',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="">
      <lbk-carousel
        [rounded]="true"
        (click)="image.emit(index)"
        [navigation]="v2 ? 'border' : ''"
        [(index)]="index"
        class="aspect-square hidden lg:block cursor-pointer {{
          v2 ? '' : 'hover:opacity-50'
        }}"
        [productImages]="images"
      ></lbk-carousel>

      <!-- thumbnails -->
      <div class="relative flex gap-6 mt-6 {{ v2 ? 'gap-4 mt-10 px-10' : '' }}">
        <ng-container *ngFor="let image of images; index as i">
          <button
            (click)="index = i + 1"
            type="button"
            [class.active]="index === i + 1"
            class="rounded-xl overflow-hidden border-4 border-transparent"
          >
            <img
              class="w-full hover:opacity-50"
              [src]="image.thumbnail"
              [alt]="'Thumnail' + (i + 1)"
            />
          </button>
        </ng-container>
      </div>
      <!-- end thumbnails -->
    </div>
  `,
  styles: [
    `
      button.active {
        @apply border-primary opacity-50;
      }
    `,
  ],
})
export class CarouselThumbnailsComponent {
  @Input() images!: ProductImage[];
  @Input() v2 = false;
  @Input()  index = 1 ;
  @Output() image = new EventEmitter<number>();
}
