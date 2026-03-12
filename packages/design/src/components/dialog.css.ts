import { style, keyframes } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import { vars } from '../tokens/theme.css';

const overlayFadeIn = keyframes({
  from: { opacity: 0 },
  to: { opacity: 1 },
});

const overlayFadeOut = keyframes({
  from: { opacity: 1 },
  to: { opacity: 0 },
});

const dialogEnter = keyframes({
  from: {
    opacity: 0,
    transform: 'scale(0.92) translateY(-8px)',
  },
  to: {
    opacity: 1,
    transform: 'scale(1) translateY(0)',
  },
});

const dialogExit = keyframes({
  from: {
    opacity: 1,
    transform: 'scale(1) translateY(0)',
  },
  to: {
    opacity: 0,
    transform: 'scale(0.94) translateY(4px)',
  },
});

export const overlayStyle = recipe({
  base: {
    position: 'fixed',
    inset: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1000,
    opacity: 0,
  },
  variants: {
    open: {
      true: {
        animation: `${overlayFadeIn} 200ms ease-out both`,
      },
      false: {
        animation: `${overlayFadeOut} 200ms ease-in 80ms both`,
      },
    },
  },
});

export const dialogBoxStyle = recipe({
  base: {
    width: '480px',
    backgroundColor: vars.color.bgSecondary,
    border: `1px solid ${vars.color.borderPrimary}`,
    borderRadius: vars.radius.md,
    display: 'flex',
    flexDirection: 'column',
    opacity: 0,
    transform: 'scale(0.92) translateY(-8px)',
  },
  variants: {
    open: {
      true: {
        animation: `${dialogEnter} 250ms ease-out both`,
      },
      false: {
        animation: `${dialogExit} 180ms ease-in both`,
      },
    },
  },
});

export const headerStyle = style({
  display: 'flex',
  alignItems: 'center',
  gap: vars.spacing.md,
  padding: '24px 24px 20px',
  fontFamily: vars.font.primary,
  fontSize: '18px',
  fontWeight: '700',
  color: vars.color.textPrimary,
});

export const bodyStyle = style({
  padding: '0 24px 24px',
  fontFamily: vars.font.secondary,
  fontSize: vars.fontSize.md,
  fontWeight: 'normal',
  color: vars.color.textSecondary,
  lineHeight: '1.6',
});

export const footerStyle = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  gap: vars.spacing.md,
  padding: '16px 24px',
});

export const iconStyle = recipe({
  base: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '40px',
    height: '40px',
    borderRadius: vars.radius.pill,
    flexShrink: 0,
  },
  variants: {
    variant: {
      danger: {
        backgroundColor: vars.color.redBg,
        color: vars.color.redPrimary,
      },
    },
  },
});
