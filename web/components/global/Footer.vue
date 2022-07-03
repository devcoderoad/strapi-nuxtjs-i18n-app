<template>
  <footer
    v-chakra="{
      ':after': {
        content: `${`' '`}`,
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        // backgroundImage: 'linear-gradient(to right, #beffd2, #addbe9)',
        backgroundColor: 'rgba(28,206,234,0.82)',
        background:
          'linear-gradient(-45deg, rgba(147,26,222,0.83) 0%, rgba(28,206,234,0.82) 100%)',
        clipPath: 'polygon(0 16%, 100% 0, 100% 1000%, 0 100%)',
        zIndex: -1,
        height: '100%',
        margin: '0rem'
      }
    }"
    position="relative"
    overflow="hidden"
    :pt="[20]"
    :pb="[10]"
    zIndex="1"
    color="gray.500"
    mt="16"
  >
    <div v-chakra display="block" href="#" mx="auto" textAlign="center">
      <Logo v-chakra :mx="['auto', 1]" mb="3" display="inline" />
      <StrapiLogo v-chakra :mx="['auto', 1]" mb="3" display="inline" />
      <ChakraUiLogo v-chakra :mx="['auto', 1]" mb="3" display="inline" />
    </div>
    <CBox mx="auto" fontSize=".89rem" :p="[1]" textAlign="center">
      <p>Made by Strapi, NuxtJS and Chakra UI</p>
    </CBox>
  </footer>
</template>

<script lang="js">
import Vue from 'vue'

import Logo from '~/components/Logo.vue'
import StrapiLogo from '~/components/StrapiLogo.vue'
import ChakraUiLogo from '~/components/ChakraUiLogo.vue'

export default Vue.extend({
  components: {
    Logo,
    StrapiLogo,
    ChakraUiLogo
  }
})
</script>
