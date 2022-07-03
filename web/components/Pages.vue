<template>
  <CSimpleGrid v-if="items.data && items.data.length" columns="2" :spacing="10">
    <div v-if="$apollo.loading">Loading...</div>
    <CBox
      v-for="(page, n) in items.data"
      :key="n"
      boxShadow="lg"
      borderWidth="1px"
      p="5"
    >
      <div v-for="attributes in page" :key="attributes.slug">
        <nuxt-link
          v-if="attributes.slug"
          :to="
            attributes.slug === 'home' || attributes.slug === 'beranda'
              ? '/'
              : localePath({
                  name: 'slug',
                  params: {
                    slug: attributes.slug
                  }
                })
          "
        >
          <CHeading as="h3" size="md">{{ attributes.title }}</CHeading>
          <img
            v-if="
              attributes.image &&
              attributes.image.data &&
              attributes.image.data.attributes &&
              attributes.image.data.attributes.url
            "
            :src="`http://localhost:1337${attributes.image.data.attributes.url}`"
          />
        </nuxt-link>
      </div>
    </CBox>
  </CSimpleGrid>
</template>

<script>
import { CBox, CSimpleGrid, CHeading } from '@chakra-ui/vue'

export default {
  name: 'Pages',
  components: {
    CBox,
    CSimpleGrid,
    CHeading
  },
  props: {
    items: {
      type: Object,
      required: false,
      default: () => {}
    },
    layout: {
      type: String,
      default: ''
    },
    compact: {
      type: Boolean,
      default: false
    }
  }
}
</script>
