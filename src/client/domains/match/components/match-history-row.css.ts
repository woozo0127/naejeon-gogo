import { style } from '@vanilla-extract/css';
import { vars } from '@naejeon-gogo/design';

export const row = style({
  display: 'flex',
  alignItems: 'center',
  padding: '12px 20px',
});

export const dateText = style({
  width: 100,
  fontFamily: vars.font.secondary,
  fontSize: vars.fontSize.sm,
  color: vars.color.textSecondary,
});

export const resultWrapper = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 80,
});

export const resultBadge = style({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '4px 10px',
  borderRadius: vars.radius.sm,
  fontSize: vars.fontSize.xs,
  fontWeight: '600',
});

export const teamText = style({
  flex: 1,
  fontFamily: vars.font.secondary,
  fontSize: '12px',
});

export const durationText = style({
  width: 60,
  fontFamily: vars.font.secondary,
  fontSize: vars.fontSize.sm,
  color: vars.color.textSecondary,
  textAlign: 'right' as const,
});
