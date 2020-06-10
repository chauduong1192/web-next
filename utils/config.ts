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
  websiteUrl,
} = getConfig().publicRuntimeConfig;
