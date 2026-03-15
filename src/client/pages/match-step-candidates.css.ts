import { vars } from '@naejeon-gogo/design';
import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.spacing.xl,
});

export const candidateList = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.spacing.lg,
});

export const actionBar = style({
  position: 'sticky',
  bottom: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: vars.spacing.md,
  paddingTop: vars.spacing.xl,
  background: `linear-gradient(to bottom, transparent, ${vars.color.bgPrimary} 40%)`,
});

export const leftInfo = style({
  display: 'flex',
  alignItems: 'center',
  gap: vars.spacing.sm,
});

export const infoText = style({
  fontFamily: vars.font.primary,
  fontSize: vars.fontSize.xs,
  color: vars.color.textMuted,
});

export const rightButtons = style({
  display: 'flex',
  alignItems: 'center',
  gap: vars.spacing.md,
});

export const stepBadge = style({
  display: 'flex',
  alignItems: 'center',
  gap: vars.spacing.sm,
});

export const stepIndicator = style({
  display: 'flex',
  alignItems: 'center',
  gap: '6px',
});

export const stepDot = style({
  width: 8,
  height: 8,
  borderRadius: vars.radius.pill,
  backgroundColor: vars.color.textMuted,
});

export const stepDotActive = style({
  width: 24,
  height: 8,
  borderRadius: vars.radius.pill,
  backgroundColor: vars.color.goldPrimary,
});

export const stepLabel = style({
  fontFamily: vars.font.primary,
  fontSize: vars.fontSize.sm,
  color: vars.color.textSecondary,
});
