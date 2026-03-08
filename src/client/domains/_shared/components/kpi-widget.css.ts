import { style } from '@vanilla-extract/css';
import { vars } from '@naejeon-gogo/design';

export const widgetRoot = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.spacing.md,
  padding: '20px',
  borderRadius: vars.radius.md,
  backgroundColor: vars.color.bgCard,
  border: `1px solid ${vars.color.borderPrimary}`,
});

export const iconWrapper = style({
  color: vars.color.goldPrimary,
});

export const value = style({
  fontFamily: vars.font.primary,
  fontSize: vars.fontSize['3xl'],
  fontWeight: '700',
  color: vars.color.textPrimary,
  letterSpacing: '-1px',
});

export const label = style({
  fontFamily: vars.font.secondary,
  fontSize: vars.fontSize.sm,
  color: vars.color.textSecondary,
});
