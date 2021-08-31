// Quote.js file

import * as React from 'react'
import { graphql } from 'gatsby'
import { RichText } from 'prismic-reactjs'
// import "../scss/components/page-heading.scss"

export const PageHeading = ({ slice }) => (
  <div className="page-heading">         
    <h1 className="header-std">{RichText.asText(slice.primary.heading.raw)}</h1>
  </div> 
)

export const query = graphql`
  fragment PageDataBodyPageHeading on PrismicPageDataBodyPageHeading  {
    primary {
      heading {
        raw
      }
    }
  }
  fragment HomepageDataBodyPageHeading on PrismicHomepageDataBodyPageHeading {
    primary {
      heading {
        raw
      }
    }
  }
`