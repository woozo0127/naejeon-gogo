import { style } from '@vanilla-extract/css';
import { vars } from '../tokens/theme.css';

export const inputWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.spacing.sm,
});

export const inputLabel = style({
  fontSize: vars.fontSize.sm,
  fontWeight: '500',
  fontFamily: vars.font.secondary,
  color: vars.color.textSecondary,
});

export const inputField = style({
  display: 'flex',
  alignItems: 'center',
  gap: vars.spacing.sm,
  width: '100%',
  height: '42px',
  padding: '0 14px',
  backgroundColor: vars.color.bgInput,
  border: `1px solid ${vars.color.borderPrimary}`,
  borderRadius: vars.radius.sm,
  fontSize: vars.fontSize.md,
  fontFamily: vars.font.secondary,
  color: vars.color.textPrimary,
  outline: 'none',
  transition: 'border-color 0.2s',
  selectors: {
    '&:focus-within': {
      borderColor: vars.color.borderGold,
    },
  },
});

export const inputNative = style({
  flex: 1,
  width: '100%',
  height: '100%',
  backgroundColor: 'transparent',
  border: 'none',
  outline: 'none',
  color: 'inherit',
  fontSize: 'inherit',
  fontFamily: 'inherit',
  selectors: {
    '&::placeholder': {
      color: vars.color.textMuted,
    },
  },
});

export const selectNative = style({
  flex: 1,
  width: '100%',
  height: '100%',
  backgroundColor: 'transparent',
  border: 'none',
  outline: 'none',
  color: 'inherit',
  fontSize: 'inherit',
  fontFamily: 'inherit',
  appearance: 'none',
  cursor: 'pointer',
});

export const iconStyle = style({
  flexShrink: 0,
  color: vars.color.textMuted,
});
