import { recipe, type RecipeVariants } from '@vanilla-extract/recipes';
import { vars } from '../tokens/theme.css';

export const buttonStyle = recipe({
  base: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: vars.spacing.sm,
    height: '40px',
    padding: '10px 20px',
    borderRadius: vars.radius.sm,
    border: 'none',
    cursor: 'pointer',
    fontFamily: vars.font.primary,
    fontSize: vars.fontSize.md,
    fontWeight: '600',
    transition: 'opacity 0.2s, background-color 0.2s',
    userSelect: 'none',
    selectors: {
      '&:disabled': {
        opacity: 0.5,
        cursor: 'not-allowed',
      },
      '&:hover:not(:disabled)': {
        opacity: 0.85,
      },
    },
  },
  variants: {
    variant: {
      primary: {
        backgroundColor: vars.color.goldPrimary,
        color: vars.color.bgPrimary,
      },
      secondary: {
        backgroundColor: 'transparent',
        color: vars.color.goldPrimary,
        border: `1px solid ${vars.color.goldPrimary}`,
      },
      teal: {
        backgroundColor: vars.color.bluePrimary,
        color: vars.color.bgPrimary,
      },
      danger: {
        backgroundColor: vars.color.redPrimary,
        color: vars.color.white,
      },
      ghost: {
        backgroundColor: 'transparent',
        color: vars.color.textSecondary,
      },
      icon: {
        width: '40px',
        padding: '0',
        backgroundColor: vars.color.bgSurface,
        color: vars.color.textSecondary,
      },
    },
  },
  defaultVariants: {
    variant: 'primary',
  },
});

export type ButtonVariants = RecipeVariants<typeof buttonStyle>;
