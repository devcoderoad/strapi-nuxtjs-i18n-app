<template>
  <div>
    <Header />
    <div v-chakra zIndex="0" position="relative" height="100%" pb="8rem">
      <CSimpleGrid
        v-if="faqs && faqs.data && faqs.data.length"
        :width="['100%', '75%']"
        :px="[2, 0]"
        :py="[2, 0]"
        :columns="[1]"
        :spacing="10"
        mx="auto"
        mt="12"
        color="white"
      >
        <CBox
          borderWidth="1px"
          borderRadius="lg"
          overflow="hidden"
          :width="['100%']"
          mx="auto"
          mt="6"
          p="8"
          boxShadow="lg"
          backgroundColor="white"
          position="relative"
          zIndex="0"
          textAlign="center"
        >
          <CPseudoBox my="4">
            <CPseudoBox text-align="left" margin="0"
              ><CHeading as="h1" font-weight="thin">
                {{ $t('search') }}: {{ search }}
              </CHeading>
            </CPseudoBox>
            <Search @search="(v) => searchEvent(v)" />
          </CPseudoBox>
        </CBox>
      </CSimpleGrid>
      <CBox v-else :height="['65vh']" pt="3rem">
        <CSimpleGrid
          :width="['100%', '75%']"
          :px="[2, 0]"
          :py="[2, 0]"
          :columns="[1]"
          :spacing="10"
          mx="auto"
          mt="12"
          color="white"
          ><CBox
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            :width="['100%']"
            mx="auto"
            mt="6"
            p="8"
            boxShadow="lg"
            backgroundColor="white"
            position="relative"
            zIndex="0"
            textAlign="left"
            ><CHeading as="h1" font-weight="thin">{{
              $t('searchnotfound')
            }}</CHeading>
            <Search @search="(v) => searchEvent(v)" /></CBox
        ></CSimpleGrid>
      </CBox>
      <CSimpleGrid
        v-if="faqs && faqs.data && faqs.data.length"
        :width="['100%', '75%']"
        :px="[2, 0]"
        :py="[2, 0]"
        :columns="[1]"
        :spacing="10"
        mx="auto"
        mt="12"
      >
        <!-- <div v-if="$apollo.loading">Loading...</div> -->
        <c-accordion :allow-multiple="true" :default-index="[0]">
          <c-accordion-item
            v-for="(page, n) in faqs.data"
            :key="`${page.attributes.title}_${n}`"
            boxShadow="md"
            borderWidth="1px"
            mb="6"
            background-color="white"
            :width="[
              //'15%', // 992px upwards
              //'50%', // 480px upwards
              //'50%', // 768px upwards
              //[1, 1 / 2, 1 / 2]
              '100%' // base
            ]"
            :py="[5, 4, 5]"
            :px="[3, 5]"
            :_hover="{ boxShadow: 'lg' }"
          >
            <c-accordion-header
              v-chakra="{
                ':hover': { backgroundColor: 'transparent' },
                ':focus': { boxShadow: 'none' }
              }"
            >
              <c-box flex="1" text-align="left">
                <CHeading as="h2" size="lg" fontWeight="300">{{
                  page.attributes.title
                }}</CHeading>
              </c-box>
              <c-accordion-icon size="26px" />
            </c-accordion-header>
            <c-accordion-panel pb="4">
              <p
                v-chakra
                color="gray.600"
                v-html="page.attributes.description"
              />
              <!-- <nuxt-link
                v-if="page.attributes.title && page.attributes.slug"
                v-chakra
                color="gray.600"
                fontSize=".88rem"
                :to="
                  localePath({
                    name: 'slug',
                    params: {
                      slug: page.attributes.slug
                    }
                  })
                "
                >[Link]
              </nuxt-link> -->
              <CPseudoBox fontSize="sm" color="gray.500" mt="4">
                <!-- {{ new Date(page.attributes.createdAt) }} -->
                {{ $t('updatedAt') }}:
                {{
                  $dateFns.format(
                    page.attributes.updatedAt,
                    'EEEE, yyyy-MM-dd HH:mm',
                    {
                      locale: `${
                        $i18n.locale === 'en' ? 'en-US' : $i18n.locale
                      }`
                    }
                  )
                }}
                <!-- {{ $i18n.locale }} -->
              </CPseudoBox>
            </c-accordion-panel>
          </c-accordion-item>
        </c-accordion>
      </CSimpleGrid>
    </div>
  </div>
</template>

<script>
import {
  CBox,
  CPseudoBox,
  CAccordion,
  CAccordionItem,
  CAccordionHeader,
  CAccordionPanel,
  // CImage,
  CSimpleGrid,
  CHeading
} from '@chakra-ui/vue'
import Header from '@/components/global/Header'
import Search from '@/components/global/Search'
/* Gql queries */
import { getDataSearch } from '~/query'

export default {
  name: 'SearchPage',
  components: {
    CSimpleGrid,
    CBox,
    CPseudoBox,
    CAccordion,
    CAccordionItem,
    CAccordionHeader,
    CAccordionPanel,
    CHeading,
    Header,
    Search
  },
  data() {
    return { search: '' }
  },
  head({ $i18n, search }) {
    return { title: `${$i18n.t('searchResult', { name: search })}` }
  },
  created() {
    const { search } = this.$route.query
    this.search = search
  },
  methods: {
    searchEvent(v) {
      // console.log(v)
      this.$router
        .push(this.localePath({ path: 'search', query: { search: v } }))
        .go()
    }
  },
  // Apollo queries server side
  apollo: {
    faqs: {
      query: getDataSearch,
      variables() {
        return {
          locale: this.$i18n.locale,
          query: { contains: this.search }
        }
      }
    }
  }
}
</script>
