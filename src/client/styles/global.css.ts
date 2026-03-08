import { globalStyle } from '@vanilla-extract/css';
import { vars } from '#/client/styles/theme.css';

globalStyle('*, *::before, *::after', {
  boxSizing: 'border-box',
  margin: 0,
  padding: 0,
});

globalStyle('html', {
  height: '100%',
  backgroundColor: vars.color.bgPrimary,
  scrollbarWidth: 'none',
});

globalStyle('html::-webkit-scrollbar', {
  display: 'none',
});

globalStyle('body', {
  height: '100%',
  position: 'relative',
  fontFamily: vars.font.primary,
  fontSize: vars.fontSize.md,
  color: vars.color.textPrimary,
  backgroundColor: vars.color.bgPrimary,
  WebkitFontSmoothing: 'antialiased',
});

globalStyle('a', {
  color: vars.color.goldPrimary,
  textDecoration: 'none',
});

globalStyle('button', {
  cursor: 'pointer',
  border: 'none',
  background: 'none',
  fontFamily: 'inherit',
  color: 'inherit',
  userSelect: 'none',
});

globalStyle('input, select', {
  fontFamily: 'inherit',
  color: 'inherit',
});

globalStyle(
  'input[type="number"]::-webkit-inner-spin-button, input[type="number"]::-webkit-outer-spin-button',
  {
    WebkitAppearance: 'none',
    margin: 0,
  },
);

globalStyle('input[type="number"]', {
  MozAppearance: 'textfield',
});
