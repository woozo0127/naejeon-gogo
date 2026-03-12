import { vars } from '@naejeon-gogo/design';
import { keyframes, style } from '@vanilla-extract/css';

export const cardWrapper = style({
  position: 'relative',
  width: '540px',
  borderRadius: vars.radius.md,
  boxShadow: '0 0 16px 2px #C8AA6E30',
});

export const cardInner = style({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  gap: vars.spacing.md,
  padding: vars.spacing.lg,
  backgroundColor: vars.color.bgCard,
  borderRadius: `calc(${vars.radius.md} - 2px)`,
  margin: '2px',
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
  padding: '12px 14px',
  borderRadius: vars.radius.md,
});

export const teamHeader = style({
  fontSize: '12px',
  fontWeight: '700',
  letterSpacing: '0.5px',
});

export const teamPlayers = style({
  fontSize: '12px',
  lineHeight: '1.7',
  whiteSpace: 'pre-line',
  color: vars.color.textPrimary,
});

export const vsText = style({
  fontFamily: vars.font.primary,
  fontSize: vars.fontSize.md,
  fontWeight: '800',
  color: vars.color.textSecondary,
});

export const actionsRow = style({
  display: 'flex',
  gap: vars.spacing.sm,
  paddingTop: vars.spacing.sm,
});
