import en from '../static/lang/en'
import id from '../static/lang/id'
import ja from '../static/lang/ja'

// default language
const defaultLocale = 'en'

// List of available language
const locales = [
  {
    code: 'en',
    iso: 'en-US',
    name: 'English'
    // isCatchallLocale: true
  },
  {
    code: 'id',
    iso: 'in-ID',
    name: 'Indonesia'
    // isCatchallLocale: true
  },
  {
    code: 'ja',
    iso: 'ja-JP',
    name: 'Japan'
    // isCatchallLocale: true
  }
]

// List of available message languages
const i18nLocales = {
  fallbackLocale: 'en',
  messages: { en, id, ja }
}

export { defaultLocale, locales, i18nLocales }
