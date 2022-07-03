// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default (isLoading, countModifier, nuxtContext) => {
  let loading = 0
  loading += countModifier
  console.log('Global loading', loading, countModifier)
}
