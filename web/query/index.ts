import gql from 'graphql-tag'

const getDataPages = gql`
  query ($locale: I18NLocaleCode) {
    pages(locale: $locale) {
      data {
        attributes {
          title
          description
          slug
          image {
            data {
              attributes {
                url
              }
            }
          }
        }
      }
    }
  }
`

// const getPage = gql`
//   query ($locale: I18NLocaleCode) {
//     pages(locale: $locale) {
//       data {
//         attributes {
//           title
//           description
//           slug
//           image {
//             data {
//               attributes {
//                 url
//               }
//             }
//           }
//         }
//       }
//     }
//   }
// `

const getDataFaqCategories = gql`
  query ($locale: I18NLocaleCode) {
    faqCategories(locale: $locale) {
      data {
        attributes {
          title
          slug
          description
          icon
          createdAt
        }
      }
    }
  }
`

const getDataFaqs = gql`
  query ($locale: I18NLocaleCode) {
    faqs(locale: $locale, filters: { show: { eq: true } }) {
      data {
        attributes {
          title
          slug
          description
          createdAt
          updatedAt
        }
      }
      meta {
        pagination {
          total
          page
          pageSize
          pageCount
        }
      }
    }
  }
`

const getDataSearch = gql`
  query ($locale: I18NLocaleCode, $query: StringFilterInput) {
    faqs(
      locale: $locale
      filters: {
        or: [{ title: $query }, { description: $query }]
        show: { eq: true }
      }
    ) {
      data {
        attributes {
          title
          slug
          description
          createdAt
          updatedAt
        }
      }
    }
  }
`

export { getDataPages, getDataFaqCategories, getDataFaqs, getDataSearch }
