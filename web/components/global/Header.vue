<template>
  <div v-chakra position="relative">
    <div
      v-chakra
      :width="['100%', '75%']"
      :px="[0, 0]"
      mx="auto"
      display="block"
      position="relative"
      zIndex="1"
    >
      <CBox :width="['100%']" :px="[2, 0]" mx="auto" :py="[4]">
        <header
          v-chakra
          display="flex"
          justifyItems="center"
          flexDirection="row"
          justifyContent="space-between"
          alignContent="stretch"
          verticalAlign="middle"
        >
          <nuxt-link
            v-chakra
            :to="localePath('/')"
            :mr="[0, 4]"
            :mb="[2, 4]"
            :w="['120px']"
            alignSelf="center"
          >
            <Logo />
          </nuxt-link>
          <CBox mb="3" float="right" display="flex">
            <Languages />
            <CIconButton
              size="sm"
              :ml="[1]"
              :mr="[0]"
              :icon="colorMode === 'light' ? 'moon' : 'sun'"
              :aria-label="`Switch to ${
                colorMode === 'light' ? 'dark' : 'light'
              } mode`"
              @click="toggleColorMode"
            />
          </CBox>
        </header>
      </CBox>
    </div>
    <div
      v-chakra
      :width="['100%']"
      mx="auto"
      bgGradient="linear(-45deg, #7928CA, #FF0080)"
      minH="260px"
      position="absolute"
      top="0"
      left="0"
      right="0"
      zIndex="0"
    ></div>
  </div>
</template>

<script>
import { CBox, CIconButton } from '@chakra-ui/vue'
import Logo from '@/components/LogoFaqly.vue'
import Languages from '@/components/Languages.vue'
export default {
  components: {
    Logo,
    Languages,
    CBox,
    CIconButton
  },
  inject: ['$chakraColorMode', '$toggleColorMode'],
  computed: {
    colorMode() {
      return this.$chakraColorMode()
    },
    theme() {
      return this.$chakraTheme()
    },
    toggleColorMode() {
      return this.$toggleColorMode
    }
  }
}
</script>
