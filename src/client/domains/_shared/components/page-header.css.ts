import { vars } from '@naejeon-gogo/design';
import { style } from '@vanilla-extract/css';

export const headerRoot = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
});

export const left = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.spacing.xs,
});

export const title = style({
  fontFamily: vars.font.primary,
  fontSize: vars.fontSize['2xl'],
  fontWeight: '700',
  color: vars.color.textPrimary,
  letterSpacing: '-0.5px',
});

export const subtitle = style({
  fontFamily: vars.font.secondary,
  fontSize: vars.fontSize.md,
  color: vars.color.textSecondary,
});

export const right = style({
  display: 'flex',
  alignItems: 'center',
  gap: vars.spacing.sm,
});
