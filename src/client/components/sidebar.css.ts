import { vars } from '@naejeon-gogo/design';
import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

export const sidebarRoot = style({
  display: 'flex',
  flexDirection: 'column',
  width: '260px',
  height: '100vh',
  backgroundColor: vars.color.bgSecondary,
  borderRight: `1px solid ${vars.color.borderPrimary}`,
});

export const logoSection = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '12px',
  padding: '32px 20px 16px',
});

export const logoImage = style({
  width: '160px',
  height: '160px',
  borderRadius: vars.radius.md,
  objectFit: 'cover',
});

export const logoText = style({
  fontFamily: vars.font.primary,
  fontSize: vars.fontSize['3xl'],
  fontWeight: '700',
  color: vars.color.textPrimary,
  letterSpacing: '-2px',
});

export const divider = style({
  height: '1px',
  backgroundColor: vars.color.borderPrimary,
});

export const navSection = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '2px',
  padding: vars.spacing.md,
});

export const navItem = recipe({
  base: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    padding: '10px 14px',
    borderRadius: vars.radius.sm,
    fontFamily: vars.font.primary,
    fontSize: vars.fontSize.md,
    color: vars.color.textSecondary,
    textDecoration: 'none',
    transition: 'background-color 0.15s, color 0.15s',
    selectors: {
      '&:hover': {
        backgroundColor: vars.color.bgSurface,
        color: vars.color.textPrimary,
      },
    },
  },
  variants: {
    active: {
      true: {
        backgroundColor: vars.color.goldMuted,
        color: vars.color.textPrimary,
        fontWeight: '600',
      },
    },
  },
});
