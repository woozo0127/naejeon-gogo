// @ts-nocheck
// Legacy theme for archived components - matches old token structure
import { createThemeContract, style } from '@vanilla-extract/css';
import { vars as newVars } from '#/client/styles/theme.css';

// Re-export with old structure shape for archived css.ts files
export const vars = {
  color: {
    bgPrimary: newVars.color.bgPrimary,
    bgSecondary: newVars.color.bgSecondary,
    bgCard: newVars.color.bgCard,
    bgHover: newVars.color.bgCardHover,
    bgInput: newVars.color.bgInput,
    gold: newVars.color.goldPrimary,
    goldLight: newVars.color.goldLight,
    goldDark: newVars.color.goldDark,
    blue: newVars.color.bluePrimary,
    blueLight: newVars.color.blueLight,
    blueDark: newVars.color.blueDark,
    textPrimary: newVars.color.textPrimary,
    textSecondary: newVars.color.textSecondary,
    textMuted: newVars.color.textMuted,
    teamA: '#4a90d9',
    teamB: '#d94a4a',
    success: newVars.color.greenPrimary,
    error: newVars.color.redPrimary,
    warning: newVars.color.orangePrimary,
    border: newVars.color.borderPrimary,
    borderGold: newVars.color.borderGold,
  },
  font: {
    body: newVars.font.primary,
    mono: newVars.font.mono,
  },
  fontSize: {
    xs: '0.8125rem',
    sm: '0.9375rem',
    md: '1.0625rem',
    lg: '1.25rem',
    xl: '1.5rem',
    '2xl': '1.75rem',
  },
  space: {
    xs: '6px',
    sm: '10px',
    md: '14px',
    lg: '20px',
    xl: '28px',
    '2xl': '40px',
  },
  radius: {
    sm: '6px',
    md: '10px',
    lg: '14px',
  },
};
