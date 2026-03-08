import { style } from '@vanilla-extract/css';
import { vars } from '@naejeon-gogo/design';

export const headerRow = style({
  display: 'flex',
  alignItems: 'center',
  padding: '12px 20px',
  backgroundColor: vars.color.bgSecondary,
});

export const headerCell = style({
  fontFamily: vars.font.secondary,
  fontSize: '12px',
  fontWeight: '600',
  color: vars.color.textMuted,
});

export const tableBody = style({
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
  overflow: 'auto',
});
