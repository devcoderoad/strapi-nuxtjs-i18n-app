<template>
  <div v-chakra alignItems="center">
    <!-- <nuxt-link
        v-for="(locale, i) in showLocales"
        :key="i"
        :to="switchLocalePath(locale.code)"
        :class="`${$i18n.locale === locale.code ? 'active' : ''}`"
      >
        <CText
          fontWeight="bold"
          color="brand.primary"
          textDecoration="underline"
          display="inline"
          mr="3"
          >{{ locale.name }}</CText
        >
      </nuxt-link> -->
    <!-- <c-box mb="3" :w="['125px', '150px']" mx="auto" textAlign="center">
        <c-select
          v-chakra
          :placeholder="localeName"
          variant="filled"
          size="sm"
          :backgroundImage="`/img/country/${$i18n.locale}.png`"
          backgroundPosition="75% center"
          backgroundRepeat="no-repeat"
          @change="(v) => onChangeSelect(v)"
        >
          <option
            v-for="(locale, i) in showLocales"
            :key="i"
            :value="`${
              $i18n.defaultLocale === locale.code ? '/' : locale.code
            }`"
          >
            {{ locale.name }}
          </option>
        </c-select>
      </c-box> -->
    <c-menu v-slot="{ isOpen }">
      <c-menu-button
        as="button"
        minW="120px"
        fontWeight="400"
        :is-active="isOpen"
        :right-icon="isOpen ? 'chevron-up' : 'chevron-down'"
        size="sm"
      >
        {{ localeName
        }}<img
          v-chakra
          ml="2"
          mr="1"
          :src="`/img/country/${$i18n.locale}.png`"
        />
      </c-menu-button>
      <c-menu-list
        p="0"
        minW="120px"
        position="relative"
        zIndex="2"
        inset="-10px auto auto 0"
      >
        <c-menu-item
          v-for="(locale, i) in showLocales"
          :key="i"
          :value="`${
            $i18n.defaultLocale === locale.value ? '/' : locale.value
          }`"
          w="100%"
          role="menuitem"
          fontSize="sm"
          @click="(v) => onChangeSelect(v)"
        >
          {{ locale.name }}
          <!-- 
              click will detect img if img clicked
              <c-image
              :src="`/img/country/${locale.code}.png`"
              :alt="locale.name"
              zIndex="0"
            /> 
            -->
        </c-menu-item>
        <!-- <c-menu-item h="40px">
            <c-image
              size="2rem"
              rounded="full"
              src="https://placekitten.com/120/120"
              alt="Simon the pensive"
              mr="12px"
            />
            <span>Simon the pensive</span>
          </c-menu-item> -->
      </c-menu-list>
    </c-menu>
  </div>
</template>

<script>
// import { /* CText, */ CBox, CSelect } from '@chakra-ui/vue'
export default {
  name: 'Languages',
  components: {
    // CText,
    // CBox,
    // CSelect
  },
  data({ $i18n }) {
    return {
      // languageType: '',
      // isOpen: false,
      localeName: $i18n.locales.find((i18n) => i18n.code === $i18n.locale).name
    }
  },
  computed: {
    // showLocales() {
    //   // console.log(this.$route.params)
    //   // console.log(this.$i18n.locale)
    //   return this.$i18n.locales.filter(
    //     (locale) => locale.code !== this.$i18n.locale
    //   )
    // }
    showLocales({ $i18n }) {
      return $i18n.locales
        .filter((locale) => locale.code !== $i18n.locale)
        .map((locale) => ({
          name: locale.name,
          value: $i18n.defaultLocale === locale.code ? '/' : locale.code
        }))
    }
  },
  methods: {
    // onChangeSelect(v) {
    // console.log(this.getRouteBaseName())
    // console.log(v.target.value)
    // return console.log(this.$nuxt.$options.router.push(v))
    // return this.$nuxt.$options.router.push(`${v.target.value}`)
    // return this.$nuxt.$options.router.push(v.target.value)
    // }
    onChangeSelect(v) {
      const {
        getRouteBaseName,
        localePath,
        $i18n: { defaultLocale = '' }
      } = this

      const url = localePath(
        { name: getRouteBaseName() },
        v === '/' ? defaultLocale : v.target.value
      )
      console.log(url)
      return this.$nuxt.$options.router.push(url)
    }
  }
  // created() {
  //   console.log(this.showLocales)
  // }
}
</script>
