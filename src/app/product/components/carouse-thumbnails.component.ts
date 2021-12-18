import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ProductImage } from 'src/app/shared/models';

@Component({
  selector: 'lbk-carousel-thumbnails',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="">
      <lbk-carousel
        [showNavigation]="false"
        [(index)]="index"
        class="overflow-hidden rounded-lg aspect-square hidden lg:block cursor-pointer"
        [productImages]="images"
      ></lbk-carousel>

      <!-- thumbnails -->
      <div class="relative flex gap-6 mt-6">
        <ng-container *ngFor="let image of images; index as i">
          <button
            (click)="index = i + 1"
            type="button"
            [class.active]="index === i + 1"
            class="rounded-lg overflow-hidden border-4 border-transparent"
          >
            <img
              class="w-full hover:opacity-50"
              [src]="image.thumbnail"
              [alt]="'Thumnail' + (i + 1)"
            />
          </button>
        </ng-container>
      </div>
    </div>
    <!-- end thumbnails -->
  `,
  styles: [`
  button.active{
    @apply border-primary opacity-50;
  }
  `]
})
export class CarouselThumbnailsComponent {
  @Input() images!: ProductImage[];
  index = 1;
}
