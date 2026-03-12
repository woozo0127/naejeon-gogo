import { vars } from '@naejeon-gogo/design';
import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

export const cardRoot = recipe({
  base: {
    display: 'flex',
    flexDirection: 'column',
    borderRadius: vars.radius.md,
    backgroundColor: vars.color.bgCard,
    border: `1px solid ${vars.color.borderPrimary}`,
    cursor: 'pointer',
    transition: 'border-color 0.15s',
    overflow: 'hidden',
  },
  variants: {
    selected: {
      true: {
        borderColor: vars.color.borderGold,
      },
    },
  },
});

export const cardHeader = recipe({
  base: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: `${vars.spacing.md} ${vars.spacing.lg}`,
    gap: vars.spacing.md,
    borderBottom: '1px solid transparent',
  },
  variants: {
    selected: {
      true: {
        backgroundColor: vars.color.goldMuted,
      },
      false: {
        borderBottomColor: vars.color.borderPrimary,
      },
    },
  },
});

export const headerLeft = style({
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
});

export const numCircle = recipe({
  base: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 24,
    height: 24,
    borderRadius: vars.radius.pill,
    fontFamily: vars.font.primary,
    fontSize: vars.fontSize.sm,
    fontWeight: '700',
  },
  variants: {
    selected: {
      true: {
        backgroundColor: vars.color.goldPrimary,
        color: vars.color.bgPrimary,
      },
      false: {
        backgroundColor: vars.color.bgSurface,
        color: vars.color.textPrimary,
      },
    },
  },
});

export const titleText = recipe({
  base: {
    fontFamily: vars.font.primary,
    fontSize: vars.fontSize.md,
    fontWeight: '700',
  },
  variants: {
    selected: {
      true: {
        color: vars.color.goldPrimary,
      },
      false: {
        color: vars.color.textSecondary,
      },
    },
  },
});

export const headerRight = style({
  display: 'flex',
  alignItems: 'center',
  gap: vars.spacing.sm,
});

export const selLabel = style({
  fontFamily: vars.font.primary,
  fontSize: vars.fontSize.xs,
  color: vars.color.textSecondary,
});

export const radioBtn = recipe({
  base: {
    width: 20,
    height: 20,
    borderRadius: vars.radius.pill,
    border: `2px solid ${vars.color.borderGold}`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  variants: {
    selected: {
      true: {
        backgroundColor: vars.color.goldPrimary,
      },
      false: {
        backgroundColor: vars.color.bgTertiary,
      },
    },
  },
});

export const radioDot = style({
  width: 8,
  height: 8,
  borderRadius: vars.radius.pill,
  backgroundColor: vars.color.bgPrimary,
});

export const teamsRow = style({
  display: 'flex',
  width: '100%',
});

export const teamSection = style({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  gap: vars.spacing.sm,
  padding: vars.spacing.md,
});

export const teamHeader = style({
  display: 'flex',
  alignItems: 'center',
  gap: vars.spacing.sm,
});

export const teamDot = style({
  width: 8,
  height: 8,
  borderRadius: vars.radius.pill,
});

export const teamLabel = style({
  fontFamily: vars.font.primary,
  fontSize: vars.fontSize.xs,
  fontWeight: '700',
  textTransform: 'uppercase' as const,
  letterSpacing: '0.05em',
});

export const teamsDivider = style({
  width: 1,
  backgroundColor: vars.color.borderPrimary,
  alignSelf: 'stretch',
});

export const dragHandle = style({
  display: 'flex',
  alignItems: 'center',
  color: vars.color.textMuted,
  cursor: 'grab',
  selectors: {
    '&:active': {
      cursor: 'grabbing',
    },
  },
});

export const playerRow = style({
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  padding: `${vars.spacing.xs} 0`,
  borderRadius: vars.radius.sm,
  transition: 'background-color 0.15s',
});

export const playerInfo = style({
  flex: 1,
  display: 'flex',
  alignItems: 'center',
  gap: '6px',
});

export const playerName = style({
  fontFamily: vars.font.primary,
  fontSize: vars.fontSize.sm,
  fontWeight: '700',
  color: vars.color.textPrimary,
});
