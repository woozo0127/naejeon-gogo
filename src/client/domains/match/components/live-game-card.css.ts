import { style, keyframes } from '@vanilla-extract/css';
import { vars } from '@naejeon-gogo/design';

const spin = keyframes({
  '0%': { transform: 'rotate(0deg)' },
  '100%': { transform: 'rotate(360deg)' },
});

export const cardWrapper = style({
  position: 'relative',
  width: '540px',
  borderRadius: vars.radius.md,
  padding: '2px',
  boxShadow: '0 0 16px #C8AA6E30',
});

export const gradientBorder = style({
  position: 'absolute',
  inset: 0,
  borderRadius: vars.radius.md,
  background: 'conic-gradient(from 0deg, #1E2D3D 0%, #785A28 8%, #C8AA6E 15%, #F0E6D2 22%, #C8AA6E 29%, #785A28 36%, #1E2D3D 50%, #1E2D3D 100%)',
  animation: `${spin} 3s linear infinite`,
  zIndex: 0,
  mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
  maskComposite: 'exclude',
  padding: '2px',
});

export const cardInner = style({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  gap: vars.spacing.md,
  padding: vars.spacing.lg,
  backgroundColor: vars.color.bgCard,
  borderRadius: `calc(${vars.radius.md} - 2px)`,
  zIndex: 1,
});

export const liveHeader = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '0 2px',
});

export const liveHeaderLeft = style({
  display: 'flex',
  alignItems: 'center',
  gap: vars.spacing.sm,
});

const pulse = keyframes({
  '0%, 100%': { opacity: 1 },
  '50%': { opacity: 0.4 },
});

export const liveDot = style({
  width: 8,
  height: 8,
  borderRadius: '50%',
  backgroundColor: vars.color.greenPrimary,
  animation: `${pulse} 2s ease-in-out infinite`,
});

export const liveLabel = style({
  fontFamily: vars.font.primary,
  fontSize: vars.fontSize.md,
  fontWeight: '700',
  color: vars.color.textPrimary,
});

export const timeLabel = style({
  fontFamily: vars.font.secondary,
  fontSize: '12px',
  color: vars.color.textSecondary,
});

export const teamsRow = style({
  display: 'flex',
  alignItems: 'center',
  gap: vars.spacing.lg,
});

export const teamBox = style({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  gap: vars.spacing.sm,
  padding: vars.spacing.md,
  borderRadius: vars.radius.sm,
});

export const teamHeader = style({
  fontSize: '12px',
  fontWeight: '700',
});

export const teamPlayers = style({
  fontSize: '12px',
  lineHeight: '1.7',
  whiteSpace: 'pre-line',
});

export const vsText = style({
  fontFamily: vars.font.primary,
  fontSize: vars.fontSize.md,
  fontWeight: '800',
  color: vars.color.textMuted,
});
