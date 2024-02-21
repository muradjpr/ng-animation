import { state, style, trigger } from '@angular/animations';

export const menuAnimation = trigger('menu', [
  state(
    'menuBg',
    style({
      opacity: 1,
    })
  ),
]);
