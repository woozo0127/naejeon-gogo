import { recipe, type RecipeVariants } from '@vanilla-extract/recipes';
import { vars } from '../tokens/theme.css';

export const badgeStyle = recipe({
  base: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: vars.radius.pill,
    fontFamily: vars.font.primary,
    fontSize: vars.fontSize.xs,
    fontWeight: '600',
    whiteSpace: 'nowrap',
  },
  variants: {
    size: {
      sm: {
        height: '20px',
        padding: '2px 6px',
        gap: '3px',
      },
      md: {
        height: '28px',
        padding: '4px 12px',
        gap: '6px',
      },
    },
  },
  defaultVariants: {
    size: 'sm',
  },
});

export type BadgeVariants = RecipeVariants<typeof badgeStyle>;
