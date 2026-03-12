import { vars } from '@naejeon-gogo/design';
import { style } from '@vanilla-extract/css';

export const row = style({
  display: 'flex',
  alignItems: 'center',
  padding: '12px 20px',
  transition: 'background-color 0.15s',
  selectors: {
    '&:hover': {
      backgroundColor: vars.color.bgCardHover,
    },
  },
});

export const nameSection = style({
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  width: '280px',
});

export const nameText = style({
  fontFamily: vars.font.primary,
  fontSize: vars.fontSize.sm,
  fontWeight: '600',
  color: vars.color.textPrimary,
});

export const positionSection = style({
  display: 'flex',
  alignItems: 'center',
  width: '120px',
});

export const positionBadge = style({
  display: 'inline-flex',
  alignItems: 'center',
  gap: '6px',
  height: '28px',
  padding: '0 10px',
  borderRadius: vars.radius.pill,
  backgroundColor: vars.color.bgSurface,
  fontSize: vars.fontSize.sm,
  fontWeight: '500',
});

export const cell = style({
  fontFamily: vars.font.secondary,
  fontSize: vars.fontSize.sm,
  fontWeight: '500',
  color: vars.color.textPrimary,
});

export const subPositions = style({
  display: 'flex',
  alignItems: 'center',
  gap: vars.spacing.xs,
});

export const subPosBadge = style({
  display: 'inline-flex',
  alignItems: 'center',
  gap: '4px',
  height: '20px',
  padding: '2px 6px',
  borderRadius: vars.radius.pill,
  backgroundColor: vars.color.bgSurface,
  fontSize: vars.fontSize.xs,
  color: vars.color.textSecondary,
});

export const streakBadge = style({
  display: 'inline-flex',
  alignItems: 'center',
  gap: '4px',
  height: '20px',
  padding: '2px 8px',
  borderRadius: vars.radius.pill,
  fontSize: vars.fontSize.xs,
  fontWeight: '600',
});
