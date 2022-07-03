<template>
  <CThemeProvider>
    <CColorModeProvider>
      <CBox
        as="main"
        fontFamily="body"
        fontSize="md"
        fontColor="grey.500"
        v-bind="mainStyles[colorMode || 'light']"
      >
        <CReset />
        <!-- <Header :props="{ colorMode, theme, toggleColorMode }" /> -->
        <Nuxt />
        <Footer />
      </CBox>
    </CColorModeProvider>
  </CThemeProvider>
</template>

<script>
import Vue from 'vue'

import {
  CThemeProvider,
  CColorModeProvider,
  CReset,
  CBox
} from '@chakra-ui/vue'

import Footer from '@/components/global/Footer'

export default Vue.extend({
  name: 'DefaultLayout',
  components: {
    CThemeProvider,
    CColorModeProvider,
    CReset,
    CBox,
    Footer
  },
  data() {
    return {
      colorMode: 'light',
      mainStyles: {
        dark: {
          bg: 'gray.700',
          color: 'whiteAlpha.900'
        },
        light: {
          bg: 'white',
          color: 'gray.900'
        }
      }
    }
  },
  head({ $i18n }) {
    return {
      htmlAttrs: {
        lang: $i18n.locale
      }
    }
  }
})
</script>

<style>
.page-enter-active,
.page-leave-active {
  /* transition-delay: 0s; */
  transition: opacity 0.15s ease-out 0.2;
}

.page-enter,
.page-leave-active {
  opacity: 0;
}
</style>
