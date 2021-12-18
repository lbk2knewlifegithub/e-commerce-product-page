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

export function scaleInOut(option?: CustomAnimation) {
  option = { ...DefaultCustomAnimation, ...option };
  const { name, delay, duration, timing } = option;
  return trigger(name || 'scaleInOut', [
    state('void', style({ transform: 'scale(0.1)' })),
    transition(':enter', [animate('{{duration}}ms {{delay}}ms {{timing}}')], {
      params: { delay, timing, duration },
    }),
    transition(':leave', [animate('{{duration}}ms {{delay}}ms {{timing}}')], {
      params: { delay, timing, duration },
    }),
  ]);
}
