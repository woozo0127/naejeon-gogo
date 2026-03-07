import { recipe } from '@vanilla-extract/recipes';
import { style } from '@vanilla-extract/css';
import { vars } from '../tokens/theme.css';

export const avatarStyle = recipe({
  base: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: vars.radius.pill,
    backgroundColor: vars.color.bgTertiary,
    border: `2px solid ${vars.color.goldPrimary}`,
    overflow: 'hidden',
    flexShrink: 0,
  },
  variants: {
    size: {
      sm: { width: '32px', height: '32px' },
      md: { width: '40px', height: '40px' },
      lg: { width: '56px', height: '56px' },
    },
  },
  defaultVariants: {
    size: 'md',
  },
});

export const avatarImage = style({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
});
