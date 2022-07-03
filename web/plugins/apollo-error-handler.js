/* eslint-disable @typescript-eslint/no-unused-vars */
export default (
  { graphQLErrors, networkError, operation, forward },
  nuxtContext
) => {
  console.log('Global error handler')
  console.log(graphQLErrors, networkError, operation, forward)
}
