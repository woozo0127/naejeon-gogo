import { vars } from '@naejeon-gogo/design';
import { style } from '@vanilla-extract/css';

export const page = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.spacing.xl,
  height: '100%',
  padding: vars.spacing['2xl'],
});

export const statsRow = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: vars.spacing.lg,
});

export const searchWrap = style({
  padding: '12px 20px',
});
