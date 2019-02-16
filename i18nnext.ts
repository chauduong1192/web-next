const NextI18Next = require('next-i18next').default;

const DEFAULT_OPTIONS = {
  otherLanguages: ['vn'],
  serverLanguageDetection: false,
};

module.exports = new NextI18Next(DEFAULT_OPTIONS);
