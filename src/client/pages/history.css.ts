import { vars } from '@naejeon-gogo/design';
import { style } from '@vanilla-extract/css';

export const page = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.spacing.xl,
  height: '100%',
  padding: vars.spacing['2xl'],
});

export const liveRow = style({
  display: 'flex',
  justifyContent: 'center',
});
