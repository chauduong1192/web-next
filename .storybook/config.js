import { configure } from '@storybook/react';
import { addParameters } from '@storybook/client-api';

configure(require.context('../stories', true, /\.stories\.tsx?$/), module);

addParameters({
  viewport: {
    viewports: newViewports, // newViewports would be an ViewportMap. (see below for examples)
    defaultViewport: 'someDefault',
  },
});