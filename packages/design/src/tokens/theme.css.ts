import { createGlobalTheme } from '@vanilla-extract/css';

export const vars = createGlobalTheme(':root', {
  color: {
    bgPrimary: '#0A0E13',
    bgSecondary: '#0F1923',
    bgCard: '#0F1923',
    bgCardHover: '#162030',
    bgInput: '#0A1628',
    bgSurface: '#1E2D3D',
    bgTertiary: '#1A2332',

    goldPrimary: '#C8AA6E',
    goldLight: '#F0E6D2',
    goldDark: '#785A28',
    goldMuted: '#463714',

    bluePrimary: '#0AC8B9',
    blueLight: '#0DD3C4',
    blueDark: '#005A82',
    blueMuted: '#0A323C',

    textPrimary: '#F0E6D2',
    textSecondary: '#A09B8C',
    textMuted: '#5B5A56',
    textGold: '#C8AA6E',
    textTeal: '#0AC8B9',

    greenPrimary: '#0ACE83',
    greenBg: '#0A3C28',
    redPrimary: '#E84057',
    redBg: '#3C1418',
    orangePrimary: '#F5A623',
    purplePrimary: '#9B59B6',

    borderPrimary: '#1E2D3D',
    borderGold: '#785A28',
    borderGoldLight: '#C8AA6E',

    white: '#FFFFFF',
  },
  font: {
    primary: "'Space Grotesk', sans-serif",
    secondary: "'Inter', sans-serif",
    mono: "'JetBrains Mono', monospace",
  },
  fontSize: {
    xs: '11px',
    sm: '13px',
    md: '14px',
    lg: '16px',
    xl: '20px',
    '2xl': '24px',
    '3xl': '32px',
  },
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '12px',
    lg: '16px',
    xl: '24px',
    '2xl': '32px',
    '3xl': '40px',
  },
  radius: {
    sm: '4px',
    md: '8px',
    lg: '12px',
    pill: '999px',
  },
});
