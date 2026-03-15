import { vars } from '@naejeon-gogo/design';
import { style } from '@vanilla-extract/css';

export const page = style({
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100%',
  padding: vars.spacing['2xl'],
});
