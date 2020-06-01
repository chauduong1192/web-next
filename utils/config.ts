import getConfig from 'next/config';

export const {
  isProd,
  apiKey,
  apiUrl,
} = getConfig().serverRuntimeConfig;

export const {
  name,
  description,
  keywords,
  themeColor,
  gtmCode,
} = getConfig().publicRuntimeConfig;
