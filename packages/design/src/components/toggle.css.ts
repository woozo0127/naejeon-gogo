import { recipe } from '@vanilla-extract/recipes';
import { vars } from '../tokens/theme.css';

export const toggleTrack = recipe({
  base: {
    display: 'inline-flex',
    alignItems: 'center',
    width: '44px',
    height: '24px',
    padding: '2px',
    borderRadius: vars.radius.pill,
    cursor: 'pointer',
    transition: 'background-color 0.2s',
    border: 'none',
  },
  variants: {
    checked: {
      true: {
        backgroundColor: vars.color.bluePrimary,
        justifyContent: 'flex-end',
      },
      false: {
        backgroundColor: vars.color.bgSurface,
        justifyContent: 'flex-start',
      },
    },
  },
  defaultVariants: {
    checked: false,
  },
});

export const toggleKnob = recipe({
  base: {
    width: '20px',
    height: '20px',
    borderRadius: '50%',
    transition: 'background-color 0.2s',
  },
  variants: {
    checked: {
      true: {
        backgroundColor: vars.color.white,
      },
      false: {
        backgroundColor: '#888888',
      },
    },
  },
  defaultVariants: {
    checked: false,
  },
});
