import { style } from '@vanilla-extract/css';
import { vars } from '@naejeon-gogo/design';

export const page = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.spacing.xl,
  height: '100%',
  padding: vars.spacing['2xl'],
});

export const userGrid = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
  gap: vars.spacing.md,
});

export const actionBar = style({
  display: 'flex',
  justifyContent: 'flex-end',
  gap: vars.spacing.md,
});

export const cardContent = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.spacing.lg,
  padding: '20px',
  flex: 1,
});
