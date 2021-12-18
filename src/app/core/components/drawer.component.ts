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
import { slideInLeft } from '../../shared/animations';

@Component({
  selector: 'lbk-drawer',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <!-- hamburger -->
    <button (click)="opened.emit()" type="button">
      <img src="/assets/images/icon-menu.svg" alt="Menu" />
    </button>
    <!-- end hamburger -->

    <div
      @container
      *ngIf="open"
      class="fixed top-0 left-0 bg-black/75 w-full h-screen z-[50]"
    >
      <div
        @slideInLeft
        class="bg-white w-[60%] p-8 grid gap-10 place-content-start h-full sm:w-[30%]"
      >
        <!-- close -->
        <button (click)="closed.emit()" type="button">
          <img
            class="duration-100 hover:rotate-180"
            src="/assets/images/icon-close.svg"
            alt="Close"
          />
        </button>
        <!-- end close -->

        <!-- links -->
        <ul class="links">
          <li><a href="#">Collections</a></li>
          <li><a href="#">Men</a></li>
          <li><a href="#">Women</a></li>
          <li><a class="" href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
        <!-- end links -->
      </div>
    </div>
  `,
  styles: [
    `
      .links {
        @apply grid gap-6 font-black text-lg;
        li {
          a {
            @apply hover:border-b-4 hover:border-primary;
          }
        }
      }
    `,
  ],
  animations: [
    slideInLeft(),
    trigger('container', [
      transition(':enter', [
        group([
          query('@slideInLeft', animateChild()),
          style({ opacity: 0 }),
          animate('400ms 0ms ease-out' ),
        ]),
      ]),
      transition(':leave', [
        group([
          query('@slideInLeft', animateChild()),
          animate('200ms 500ms ease-in', style({ opacity: 0 })),
        ]),
      ]),
    ]),
  ],
})
export class DrawerComponent {
  @Input() open!: boolean;
  @Output() closed = new EventEmitter<void>();
  @Output() opened = new EventEmitter<void>();
}
