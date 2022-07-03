<template>
  <c-simple-grid :columns="2" :spacing="10">
    <div
      v-for="item of items"
      :key="item.title"
      class="w-1/3 h-28 shadow-lg p-4 m-3 bg-white"
    >
      {{ item.title }}
    </div>
  </c-simple-grid>
</template>

<script>
import { CSimpleGrid } from '@chakra-ui/vue'

export default {
  name: 'Cards',
  components: {
    CSimpleGrid
  },
  props: {
    items: {
      type: Array,
      required: false,
      default: () => [
        { title: 'asdasdasd', desc: 'dasdasd' },
        { title: 'asdasdasdadasd', desc: 'dasdcxcasdasdas' },
        { title: 'asdasdasxcxcxc', desc: 'dcxcxasdasdasdas' },
        { title: 'asdasdasdwewe', desc: 'sdsdasdasdasdas' },
        { title: 'asdasdasdadxcxcasd', desc: 'xcxdasdasdasdas' }
      ]
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
