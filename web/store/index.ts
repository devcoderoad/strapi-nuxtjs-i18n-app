// top level states
const state = () => ({
  locale: ''
})

// top level getters
const getters = {
  getLocale: (state) => state.locale
}

// top level mutations
const mutations = {
  GET_LOCALE(state, payload) {
    state.locale = payload
  }
}
// top level actions
const actions = {
  /* async nuxtServerInit({ commit, context }, { req }) {} */
}

// export store modules
export default {
  state,
  getters,
  mutations,
  actions
}
