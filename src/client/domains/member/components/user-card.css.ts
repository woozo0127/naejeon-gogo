import { vars } from '@naejeon-gogo/design';
import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

export const cardRoot = recipe({
  base: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    padding: vars.spacing.md,
    borderRadius: vars.radius.md,
    backgroundColor: vars.color.bgCard,
    border: `1px solid ${vars.color.borderPrimary}`,
    cursor: 'pointer',
    transition: 'border-color 0.15s, background-color 0.15s',
    selectors: {
      '&:hover': {
        backgroundColor: vars.color.bgCardHover,
      },
    },
  },
  variants: {
    selected: {
      true: {
        borderColor: vars.color.goldPrimary,
        backgroundColor: vars.color.bgCardHover,
      },
    },
  },
});

export const info = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '2px',
  flex: 1,
});

export const nameRow = style({
  display: 'flex',
  alignItems: 'center',
  gap: '6px',
});

export const name = style({
  fontFamily: vars.font.primary,
  fontSize: vars.fontSize.sm,
  fontWeight: '700',
  color: vars.color.textPrimary,
});
