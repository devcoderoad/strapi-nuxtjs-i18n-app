// export default (context) => {
export default () => {
  return {
    httpEndpoint: 'http://localhost:1337/graphql'
    /*
     * For permanent authentication provide `getAuth` function.
     * The string returned will be used in all requests as authorization header
     */
    // getAuth: () => 'Bearer my-static-token',
  }
}
