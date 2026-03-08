import { style } from '@vanilla-extract/css';
import { vars } from '@naejeon-gogo/design';

export const cardRoot = style({
  display: 'flex',
  flexDirection: 'column',
  borderRadius: vars.radius.md,
  backgroundColor: vars.color.bgCard,
  border: `1px solid ${vars.color.borderPrimary}`,
  overflow: 'hidden',
});

export const cardHeader = style({
  display: 'flex',
  alignItems: 'center',
  gap: vars.spacing.sm,
  padding: '16px 20px',
  borderBottom: `1px solid ${vars.color.borderPrimary}`,
});

export const cardHeaderIcon = style({
  color: vars.color.goldPrimary,
});

export const cardHeaderTitle = style({
  flex: 1,
  fontFamily: vars.font.primary,
  fontSize: vars.fontSize.md,
  fontWeight: '600',
  color: vars.color.textPrimary,
});

export const cardHeaderRight = style({
  fontFamily: vars.font.secondary,
  fontSize: vars.fontSize.sm,
  color: vars.color.textMuted,
});

export const cardBody = style({
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
});
