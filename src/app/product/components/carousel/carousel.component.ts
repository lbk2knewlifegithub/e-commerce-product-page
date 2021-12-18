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
  ElementRef,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
  ViewChild
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
  @ViewChild('slide') slideRef!: ElementRef;

  @Input() productImages!: ProductImage[];
  @Input() navigation: 'inner' | 'border' | '' = 'inner';
  @Input() rounded = false;
  transitionEnd = false;
  @Input() set index(i: number) {
    if (this.slideRef && !this.transitionEnd) {
      this.applyTransition(this.slideRef.nativeElement);
    }

    this._index = i;
    this.indexChange.emit(i);
  }

  _index = 1;

  @Output() indexChange = new EventEmitter<number>();

  lastClone!: ProductImage;
  firstClone!: ProductImage;
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
    this.transitionEnd = false;
    this.applyTransition(slide);
    this.index--;
  }

  next(slide: HTMLElement): void {
    if (this.index >= this.productImages.length - 1) return;
    this.transitionEnd = false;
    this.applyTransition(slide);
    this.index = (this.index + 1) % this.productImages.length;
  }

  translate(slide: HTMLElement): any {
    return { transform: `translateX(-${this.index * slide.clientWidth}px)` };
  }

  onTransitionEnd(slide: HTMLElement): void {
    if (this.productImages[this.index] === this.lastClone) {
      this.transitionEnd = true;
      slide.style.transition = 'none';
      this.index = this.productImages.length - 2;
    }

    if (this.productImages[this.index] === this.firstClone) {
      this.transitionEnd = true;
      slide.style.transition = 'none';
      this.index = this.productImages.length - this.index;
    }
  }

  imageWidth(slide: HTMLElement): any {
    return { 'min-width': slide.clientWidth + 'px' };
  }

  get index(): number {
    return this._index;
  }

  get previousPosition(): string {
    return this.navigation === 'inner' ? 'translate-x-1/2' : '-translate-x-1/2';
  }

  get nextPosition(): string {
    return this.navigation === 'inner' ? '-translate-x-1/2' : 'translate-x-1/2';
  }
}
