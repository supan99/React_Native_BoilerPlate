import * as RNLocalize from 'react-native-localize';
import { I18n } from "i18n-js";

import en from './en';

const locales = RNLocalize.getLocales();

let i18n = new I18n()
if (Array.isArray(locales)) {
  i18n.locale = locales[0].languageTag
}

i18n.enableFallback = true;

i18n.translations = {
  en
}


export const langauge = {
  english: 'en',
}

export default i18n;
