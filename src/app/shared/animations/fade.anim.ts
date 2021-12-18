import {
  animate,
  state,
  style,
  transition,
  trigger
} from '@angular/animations';
import {
  CustomAnimation,
  DefaultCustomAnimation
} from '../models/custom-animation.model';

export function fadeIn(option?: CustomAnimation) {
  option = { ...DefaultCustomAnimation, ...option };
  const { name, delay, duration, timing } = option;
  return trigger(name || 'fadeIn', [
    state('void', style({ opacity: 0 })),
    transition(':enter', [animate('{{duration}}ms {{delay}}ms {{timing}}')], {
      params: { delay, timing, duration },
    }),
  ]);
}
