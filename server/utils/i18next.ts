import * as i18next from 'i18next';
import { LanguageDetector as languageDetector } from 'i18next-express-middleware';
import * as fsBackend from 'i18next-node-fs-backend';
import * as path from 'path';

const defaultLanguage = process.env.DEFAULT_LANGUAGE || 'en';
const otherLanguages = process.env.OTHER_LANGUAGES || ['vi'];
const defaultNamespace = process.env.DEFAULT_NAMESPACE || 'common';
const otherNamespaces = process.env.OTHER_NAMESPACES || ['home', 'about'];
const localesDir = path.join(__dirname, '../../static/locales');

const options = {
  fallbackLng: defaultLanguage,
  // tslint:disable-next-line:readonly-array
  preload: [defaultLanguage, ...otherLanguages],
  // tslint:disable-next-line:readonly-array
  ns: [defaultNamespace, ...otherNamespaces],
  defaultNS: defaultNamespace,
  fallbackNS: defaultNamespace,
  backend: {
    loadPath: `${localesDir}/{{lng}}/{{ns}}.json`,
  },
};

const init = () => i18next
  .use(languageDetector)
  .use(fsBackend)
  .init(options);

export default init;
