<template>
  <CBox :width="['100%']" :px="[2, 0]" :py="[2, 8]" mx="auto">
    <c-stack :spacing="3">
      <input
        v-chakra="{
          ':focus': { outline: 'none' }
        }"
        :w="['100%']"
        p="2"
        border="2px"
        borderColor="gray.300"
        rounded="md"
        type="text"
        name="search"
        placeholder="Search"
        value=""
        @change="emitSearch"
      />
    </c-stack>
    <!-- <c-button @click="emitSearch">Submit</c-button> -->
    <!-- <c-icon-button aria-label="Search database" icon="check" /> -->
    <!-- </c-input-group> -->
  </CBox>
</template>

<script>
import {
  CBox /* CIconButton */,
  CStack
  /* CButton, */
  /* CInput, */
} from /* CInputGroup */ '@chakra-ui/vue'
// import Vue from 'vue'

export default {
  components: {
    CBox,
    CStack
    // CInput,
    // CButton,
    // CInputGroup
    /* CIconButton */
  },
  methods: {
    emitSearch(e) {
      const vm = this
      e.target.value !== '' && vm.$emit('search', e.target.value)
    }
  }
}

/*
import Vue, { PropType } from 'vue'
interface ComplexMessage {
  title: string,
  okMessage: string,
  cancelMessage: string
}
const Component = Vue.extend({
  props: {
    name: String,
    success: { type: String },
    callback: {
      type: Function as PropType<() => void>
    },
    message: {
      type: Object as PropType<ComplexMessage>,
      required: true,
      validator (message: ComplexMessage) {
        return !!message.title;
      }
    }
  }
})
 */
</script>
