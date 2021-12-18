import {
  animate,
  state,
  style,
  transition,
  trigger
} from '@angular/animations';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnDestroy,
  OnInit
} from '@angular/core';
import { debounceTime, fromEvent, Subscription } from 'rxjs';
import { ProductImage } from 'src/app/shared/models';
/**
 * - My first carousel component
 */
@Component({
  selector: 'lbk-carousel',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './carousel.component.html',
  animations: [
    trigger('slideIn', [
      state('void', style({ opacity: 0, transform: 'translateX(-100%)' })),
      transition(':enter', [animate('300ms', style({}))]),
    ]),
  ],
})
export class CarouselComponent implements OnInit, OnDestroy {
  @Input() productImages!: ProductImage[];
  lastClone!: ProductImage;
  firstClone!: ProductImage;
  index = 1;
  subscription!: Subscription;

  constructor(private cdf: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.lastClone = { ...this.productImages[this.productImages.length - 1] };
    this.firstClone = { ...this.productImages[0] };

    this.productImages = [
      this.lastClone,
      ...this.productImages,
      this.firstClone,
    ];

    this.subscription = fromEvent(window, 'resize')
      .pipe(debounceTime(100))
      .subscribe(() => this.cdf.detectChanges());
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  get current(): ProductImage {
    return this.productImages[this.index];
  }

  private applyTransition(slide: HTMLElement) {
    // slide.style.transition = 'transform .5s cubic-bezier(.48,1.93,.25,-0.56)';
    slide.style.transition = 'transform .5s ease-in-out';
  }

  previous(slide: HTMLElement): void {
    if (this.index <= 0) return;
    this.applyTransition(slide);
    this.index--;
  }

  next(slide: HTMLElement): void {
    if (this.index >= this.productImages.length - 1) return;
    this.applyTransition(slide);
    this.index = (this.index + 1) % this.productImages.length;
  }

  translate(slide: HTMLElement): any {
    return { transform: `translateX(-${this.index * slide.clientWidth}px)` };
  }

  onTransitionEnd(slide: HTMLElement): void {
    if (this.productImages[this.index] === this.lastClone) {
      slide.style.transition = 'none';
      this.index = this.productImages.length - 2;
    }
    if (this.productImages[this.index] === this.firstClone) {
      slide.style.transition = 'none';
      this.index = this.productImages.length - this.index;
    }
  }
  imageWidth(slide: HTMLElement): any {
    return { 'min-width': slide.clientWidth + 'px' };
  }
}
