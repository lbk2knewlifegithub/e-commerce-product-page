import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromRoot from 'src/app/reducers';
import { LayoutActions } from '../actions';

@Component({
  selector: 'lbk-header',
  template: `
    <header class="">
      <nav class="container py-4 flex justify-between items-center">
        <div class="flex gap-3 items-start">
          <!-- drawer -->
          <lbk-drawer
            class="block"
            (closed)="closed()"
            (opened)="opened()"
            [open]="(openDrawer$ | async)!"
          ></lbk-drawer>
          <!-- end drawer -->

          <!-- logo -->
          <a class="inline-block" routerLink="/">
            <img src="/assets/images/logo.svg" alt="Logo" />
          </a>
          <!-- end logo -->
        </div>

        <div class="flex gap-4 items-center">
          <!-- cart -->
          <lbk-cart class="block"></lbk-cart>
          <!-- end cart -->

          <!-- profile -->
          <lbk-profile class="block"></lbk-profile>
          <!-- end profile -->
        </div>
      </nav>
    </header>
  `,
})
export class HeaderComponent {
  openDrawer$!: Observable<boolean>;

  constructor(private readonly _store: Store) {
    this.openDrawer$ = _store.select(fromRoot.selectOpenDrawer);
  }

  closed() {
    this._store.dispatch(LayoutActions.closeDrawer());
  }

  opened() {
    this._store.dispatch(LayoutActions.openDrawer());
  }
}
