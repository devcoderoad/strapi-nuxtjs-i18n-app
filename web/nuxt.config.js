import { defaultLocale, locales, i18nLocales } from './constants/i18nLocales'
import { chakraTheme } from './constants/theme'

export default {
  // Target: https://go.nuxtjs.dev/config-target
  //  'server' | 'static'
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head() {
    const vm = this
    const i18nHead = vm.$nuxtI18nHead({ addSeoAttributes: true })
    return {
      titleTemplate: 'Faqly | %s',
      title: 'Help center service CMS',
      description: 'A Website with Custom Management System for Help Center',
      htmlAttrs: {
        // lang: defaultLocale
        ...i18nHead.htmlAttrs
      },
      // Metas
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: '' },
        { name: 'format-detection', content: 'telephone=no' },
        ...i18nHead.meta
      ],
      // Links
      link: [
        {
          rel: 'icon',
          type: 'image/x-icon',
          href: '/favicon.ico'
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.googleapis.com'
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: true
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@100;200;300;400;500;600;700;800;900&family=Roboto:wght@100;200;300;400;500;600;700;800;900&Work+Sans:wght@100;200;300;400;500;600;700;800;900&Source+Sans+Pro:wght@100;200;300;400;500;600;700;800;900&family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap'
        },
        ...i18nHead.link
      ]
    }
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: false,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/i18n',
    '@nuxtjs/apollo',
    // https://go.nuxtjs.dev/chakra
    '@chakra-ui/nuxt',
    // https://go.nuxtjs.dev/emotion
    '@nuxtjs/emotion',
    // https://github.com/nuxt-community/date-fns-module
    [
      '@nuxtjs/date-fns',
      {
        locales: locales
          .map((locale) => locale.code)
          .map((code) => (code === defaultLocale ? 'en-US' : code))
      }
    ]
  ],

  /**
   * Add extend the plugin options under the `chakra` key.
   **/
  chakra: chakraTheme,

  // Modules: https://github.com/nuxt-community/apollo-module
  apollo: {
    clientConfigs: {
      default: {
        httpEndpoint: 'http://localhost:1337/graphql'
      }
    }
  },

  // i18n module: https://i18n.nuxtjs.org/setup
  i18n: {
    defaultLocale,
    vueI18nLoader: true,
    // skipSettingLocaleOnNavigate: true,
    // lazy: true,
    // langDir: '~/static/lang/',
    locales,
    pages: {
      _slug: {
        en: '/:slug?',
        id: '/:slug?',
        ja: '/:slug?'
      }
      // index: {
      //   en: '/:slug?',
      //   id: '/:slug?',
      //   ja: '/:slug?'
      // },
      // search: {
      //   en: '/:slug?',
      //   id: '/:slug?',
      //   ja: '/:slug?'
      // }
    },
    vueI18n: i18nLocales
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    watch: ['~/constants/*.js']
  }

  // Watch property: https://nuxtjs.org/docs/configuration-glossary/configuration-watch
  // watch: ['constants/*.js']
}
