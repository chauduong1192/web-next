import { css } from 'styled-components';

const breakpoints = {
  xs: '420px',
  sm: '768px',
  md: '992px',
  lg: '1200px',
};

const devices = {
  mobile: breakpoints.xs,
  tablet: breakpoints.sm,
  desktop: breakpoints.md,
  largeDesktop: breakpoints.lg,
};

export const mediaQueries = Object.keys(devices).reduce((acc, label) => {
  acc[label] = (...args) => css`
      @media (min-width: ${devices[label]}) {
          ${css(...args)};
      }
  `;
  return acc;
}, {});

const mapBreakpoints = Object.keys(breakpoints).map(key => breakpoints[key]);

export default {
  breakpoints: mapBreakpoints,
  fontSizes: [
    12, 14, 16, 20, 24, 32, 48, 64,
  ],
  colors: {
    blue: '#07c',
    lightgray: '#f6f6ff',
    primary: '#fff',
    secondary: '#333',
  },
  space: [
    0, 4, 8, 16, 32, 64, 128, 256,
  ],
  fonts: {
    body: 'system-ui, sans-serif',
    heading: 'inherit',
    monospace: 'Menlo, monospace',
  },
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.25,
  },
  shadows: {
    small: '0 0 4px rgba(0, 0, 0, .125)',
    large: '0 0 24px rgba(0, 0, 0, .125)',
  },
  variants: {
  },
  text: {
  },
  buttons: {
    primary: {
      color: 'white',
      bg: 'secondary',
    },
  },
};
