import { style } from '@vanilla-extract/css';
import { vars } from '@naejeon-gogo/design';

export const layoutRoot = style({
  display: 'flex',
  height: '100vh',
  backgroundColor: vars.color.bgPrimary,
});

export const mainArea = style({
  flex: 1,
  overflow: 'auto',
});
