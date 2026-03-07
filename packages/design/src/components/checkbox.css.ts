import { recipe } from '@vanilla-extract/recipes';
import { vars } from '../tokens/theme.css';

export const checkboxStyle = recipe({
  base: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '22px',
    height: '22px',
    borderRadius: vars.radius.sm,
    cursor: 'pointer',
    transition: 'background-color 0.2s, border-color 0.2s',
    border: 'none',
    padding: 0,
  },
  variants: {
    checked: {
      true: {
        backgroundColor: vars.color.bluePrimary,
      },
      false: {
        backgroundColor: 'transparent',
        border: `1.5px solid ${vars.color.textMuted}`,
      },
    },
  },
  defaultVariants: {
    checked: false,
  },
});
