<template>
  <div>
    <Header />
    <div v-chakra zIndex="0" position="relative" pb="8rem">
      <CBox :width="['100%', '75%']" :px="[2, 0]" :py="[2, 0]" mx="auto">
        <Tutorial />
      </CBox>

      <CBox :width="['100%', '75%']" :px="[2, 0]" :py="[2, 0]" mx="auto">
        <Search @search="(v) => searchEvent(v)" />
      </CBox>

      <CSimpleGrid
        v-if="faqCategories && faqCategories.data.length"
        :width="['100%', '75%']"
        :px="[2, 0]"
        mx="auto"
        :py="[2, 0]"
        :columns="[1, 1, 3, 3]"
        :spacing="[1, 1, 3, 12]"
      >
        <CBox
          v-for="(category, n) in faqCategories.data"
          :key="`${category.attributes.title}_${n}`"
          boxShadow="md"
          borderWidth="1px"
          mx="auto"
          maxW="xxl"
          rounded="lg"
          overflow="hidden"
          :py="[5, 4, 6]"
          :px="[6, 8]"
          :mt="[8]"
          :mb="[0, 2, 1]"
          :width="[
            '100%' // base
          ]"
          :_hover="{ boxShadow: 'lg' }"
        >
          <CHeading
            as="h2"
            :mb="[2, 3, 4]"
            :fontSize="['1.25rem', '1.3rem', '1.5rem', '1.65rem']"
            fontWeight="300"
          >
            {{ category.attributes.title }}
            <span v-chakra float="right"
              ><c-image
                objectFit="cover"
                h="45px"
                :alt="category.attributes.title"
                :src="`/img/icon/${category.attributes.icon}`"
            /></span>
          </CHeading>
          <div v-chakra color="gray.400" fontSize=".98rem" my="2">
            {{ category.attributes.description }}
          </div>
        </CBox>
      </CSimpleGrid>

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
            :key="`${page.attributes.title}_${n + 1}`"
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
              <CPseudoBox fontSize="sm" color="gray.500" mt="4">
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
              </CPseudoBox>
            </c-accordion-panel>
          </c-accordion-item>
        </c-accordion>
      </CSimpleGrid>

      <!-- <CBox
        v-bind="mainStyles[colorMode]"
        d="flex"
        w="100vw"
        h="100vh"
        flex-dir="column"
        justify-content="center"
      >
        <CHeading text-align="center" mb="4" color="brand.primary">
          ⚡️ Hello chakra-ui/vue
        </CHeading>
        <CFlex justify="center" direction="column" align="center">
          <CBox mb="3">
            <CIconButton
              mr="3"
              :icon="colorMode === 'light' ? 'moon' : 'sun'"
              :aria-label="`Switch to ${
                colorMode === 'light' ? 'dark' : 'light'
              } mode`"
              @click="toggleColorMode"
            />
            <CButton left-icon="info" variant-color="blue" @click="showToast">
              Show Toast
            </CButton>
          </CBox>
          <CAvatarGroup>
            <CAvatar
              name="Evan You"
              alt="Evan You"
              src="https://pbs.twimg.com/profile_images/1206997998900850688/cTXTQiHm_400x400.jpg"
            >
              <CAvatarBadge size="1.0em" bg="green.500" />
            </CAvatar>
            <CAvatar
              name="Jonathan Bakebwa"
              alt="Jonathan Bakebwa"
              src="https://res.cloudinary.com/xtellar/image/upload/v1572857445/me_zqos4e.jpg"
            >
              <CAvatarBadge size="1.0em" bg="green.500" />
            </CAvatar>
            <CAvatar
              name="Segun Adebayo"
              alt="Segun Adebayo"
              src="https://pbs.twimg.com/profile_images/1169353373012897802/skPUWd6e_400x400.jpg"
            >
              <CAvatarBadge size="1.0em" bg="green.500" />
            </CAvatar>
            <CAvatar src="pop">
              <CAvatarBadge
                size="1.0em"
                border-color="papayawhip"
                bg="tomato"
              />
            </CAvatar>
          </CAvatarGroup>
          <CButton
            left-icon="close"
            variant-color="red"
            mt="3"
            @click="showModal = true"
          >
            Delete Account
          </CButton>
          <CModal :is-open="showModal">
            <CModalOverlay />
            <CModalContent>
              <CModalHeader>Are you sure?</CModalHeader>
              <CModalBody>Deleting user cannot be undone</CModalBody>
              <CModalFooter>
                <CButton @click="showModal = false"> Cancel </CButton>
                <CButton
                  margin-left="3"
                  variant-color="red"
                  @click="showModal = false"
                >
                  Delete User
                </CButton>
              </CModalFooter>
              <CModalCloseButton @click="showModal = false" />
            </CModalContent>
          </CModal>
        </CFlex>
      </CBox> -->
    </div>
  </div>
</template>

<script lang="js">
import Vue from 'vue'

import {
  CBox,
  CPseudoBox,
  CAccordion,
  CAccordionItem,
  CAccordionHeader,
  CAccordionPanel,
  CImage,
  CSimpleGrid,
  CHeading
} from '@chakra-ui/vue'

import Header from "@/components/global/Header"
import Search from "@/components/global/Search"
import Tutorial from "@/components/Tutorial"

/* Gql queries */
import { getDataPages, getDataFaqCategories, getDataFaqs} from '~/query'

export default Vue.extend({
  name: 'IndexPage',
  components: {
    Header,
    Search,
    Tutorial,
    CBox,
    CPseudoBox,
    CAccordion,
    CAccordionItem,
    CAccordionHeader,
    CAccordionPanel,
    CImage,
    CSimpleGrid,
    CHeading
  },
  data() {
    return {
      pages: {},
      sortMode:'',
      showModal: false,
      isExpanded: false,
    }
  },
  methods: {
    showToast () {
      this.$toast({
        title: 'Account created.',
        description: "We've created your account for you.",
        status: 'success',
        duration: 10000,
        isClosable: true
      })
    },
    searchEvent(v) {
      this.$router.push(
        this.localePath(
        { path: 'search', query: { search: v } })
      )
    }
  },
  // Apollo queries server side
  apollo: {
    pages: {
      query: getDataPages,
      variables() {
        return { locale: this.$i18n.locale }
      },
      fetchPolicy: 'no-cache'
    },
    faqs: {
      query: getDataFaqs,
      variables() {
        return { locale: this.$i18n.locale }
      },
      fetchPolicy: 'no-cache'
    },
    faqCategories: {
      query: getDataFaqCategories,
      variables() {
        return { locale: this.$i18n.locale }
      },
      fetchPolicy: 'no-cache'
    }
  }
})
</script>
