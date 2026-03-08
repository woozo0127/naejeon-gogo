import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import { vars } from '@naejeon-gogo/design';

export const sidebarRoot = style({
  display: 'flex',
  flexDirection: 'column',
  width: '260px',
  height: '100vh',
  backgroundColor: vars.color.bgSecondary,
  borderRight: `1px solid ${vars.color.borderPrimary}`,
  padding: '24px 12px',
  gap: '2px',
});

export const logo = style({
  fontFamily: vars.font.primary,
  fontSize: vars.fontSize['2xl'],
  fontWeight: '700',
  color: vars.color.goldPrimary,
  padding: '0 14px 24px',
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
    fontWeight: '500',
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
        color: vars.color.goldPrimary,
        fontWeight: '600',
      },
    },
  },
});
