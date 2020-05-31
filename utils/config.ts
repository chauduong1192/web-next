import getConfig from 'next/config';

export const {
  isProd,
} = getConfig().serverRuntimeConfig;

export const {
  name,
  description,
  keywords,
  themeColor,
  gtmCode,
} = getConfig().publicRuntimeConfig;
