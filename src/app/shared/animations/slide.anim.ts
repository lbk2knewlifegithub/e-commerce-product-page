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

export function slideInTop(option?: CustomAnimation) {
  option = { ...DefaultCustomAnimation, ...option };
  const { name, delay, duration, timing } = option;
  return trigger(name || 'slideInTop', [
    state('void', style({ opacity: 0, transform: 'translateY(-20px)' })),
    transition(':enter', [animate('{{duration}}ms {{delay}}ms {{timing}}')], {
      params: { delay, timing, duration },
    }),
    transition(':leave', [animate('{{duration}}ms {{delay}}ms {{timing}}')], {
      params: { delay, timing, duration },
    }),
  ]);
}




export function slideInLeft(option?: CustomAnimation) {
  option = { ...DefaultCustomAnimation, ...option };
  const { name, delay, duration, timing } = option;
  return trigger(name || 'slideInLeft', [
    state('void', style({ opacity: 0, transform: 'translateX(-100%)' })),
    transition(':enter', [animate('{{duration}}ms {{delay}}ms {{timing}}')], {
      params: { delay, timing, duration },
    }),
    transition(':leave', [animate('{{duration}}ms {{delay}}ms {{timing}}')], {
      params: { delay, timing, duration },
    }),
  ]);
}

