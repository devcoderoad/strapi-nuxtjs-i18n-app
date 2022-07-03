<template>
  <div>{{ slug }}</div>
</template>
<script>
/* Gql queries */
// import { getPage } from '~/queries'

export default {
  name: 'Slug',
  // data() {
  //   console.log(this.$i18n.locale)
  //   return { slug: this.$route.params.slug }
  // }
  async asyncData({ store, route }) {
    // console.log(route.params.slug)
    await store.dispatch('i18n/setRouteParams', {
      en: { postId: 'my-post' },
      id: { postId: 'mon-article' }
    })
    return {
      slug: route.params.slug
    }
  }
  // apollo: {
  //   pages: {
  //     query: getPage,
  //     variables() {
  //       return { locale: this.$i18n.locale }
  //     },
  //     fetchPolicy: 'cache-and-network'
  //   }
  // }
  // async asyncData({ store, route }) {
  //   await store.dispatch('i18n/setRouteParams', {
  //     en: { slug: 'my-post' },
  //     id: { slug: 'mon-article' }
  //   })
  //   return { slug: route.params.slug }
  // }
}
</script>
