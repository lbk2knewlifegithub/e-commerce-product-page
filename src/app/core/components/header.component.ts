import { Component } from '@angular/core';

@Component({
  selector: 'lbk-header',
  template: `
    <header class="">
      <nav class="container py-4 flex justify-between items-center">
        <div class="flex gap-2 items-center">
          <!-- hamburger -->
          <img src="/assets/images/icon-menu.svg" alt="Menu" />
          <!-- end hamburger -->

          <!-- logo -->
          <img src="/assets/images/logo.svg" alt="Logo" />
          <!-- end logo -->
        </div>

        <div class="flex gap-2 items-center">
          <!-- cart -->
          <div>
            <img src="/assets/images/icon-cart.svg" alt="Cart" />
          </div>
          <!-- end cart -->

          <!-- avatar -->
          <img
            class="w-8 h-8 rounded-full"
            src="/assets/images/image-avatar.png"
            alt="Avatar"
          />
          <!-- end avatar -->
        </div>
      </nav>
    </header>
  `,
})
export class HeaderComponent {}
