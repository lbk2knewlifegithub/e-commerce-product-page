import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'lbk-profile',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <button type="button">
      <img
        class="inline-block w-8 h-8 rounded-full border-2 duration-200 border-transparent hover:border-primary"
        src="/assets/images/image-avatar.png"
        alt="Avatar"
      />
    </button>
  `,
})
export class ProfileComponent {}
