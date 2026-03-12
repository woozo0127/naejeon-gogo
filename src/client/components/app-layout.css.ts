import { vars } from '@naejeon-gogo/design';
import { style } from '@vanilla-extract/css';

export const layoutRoot = style({
  display: 'flex',
  height: '100vh',
  backgroundColor: vars.color.bgPrimary,
});

export const mainArea = style({
  flex: 1,
  maxWidth: '1180px',
  margin: '0 auto',
  overflow: 'auto',
});
