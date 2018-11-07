import React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'
import CTA from '../components/cta'
import AllUX from '../components/allUXers'

import styled from 'styled-components'

const IndexHeading = styled.h1`
  margin: 80px 0;
`

export default ({ data }) => {
  return (
    <Layout>
      <IndexHeading>
        Welcome, here you can view all our UX consultants
      </IndexHeading>
      <div>
        <AllUX width={300} data={data.allMarkdownRemark.edges} />
      </div>
      <CTA contact={data.site.siteMetadata.peterContact} />
    </Layout>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        peterContact
      }
    }
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            name
            strengths
            level
            cover_image {
              publicURL
              childImageSharp {
                id
                fluid {
                  src
                }
              }
            }
          }
          fields {
            slug
          }
        }
      }
    }
  }
`
