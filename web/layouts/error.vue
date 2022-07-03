<template>
  <div>
    <h1 v-if="error.statusCode === 404">Page not found</h1>
    <h1 v-else>An error occurred</h1>
    <NuxtLink to="/">Home page</NuxtLink>
  </div>
</template>

<script lang="js">
export default {
  layout: 'LayoutError',
  props: { error: { type: Object, default: () => {} } }
}
</script>
