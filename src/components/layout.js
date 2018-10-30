import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import styled, { createGlobalStyle } from 'styled-components'
import Footer from './footer'
import Header from './header'

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Montserrat:400,700');


  html {
    box-sizing: border-box;
    font-size: 10px;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    font-family: 'Montserrat', sans-serif;
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    line-height: 2;

      h1 {
  font-size: 3.3rem;
  line-height: 4.1rem;
  font-weight: 700;
  }
  h2 {
  font-size: 3.2rem;
  line-height: 3.1rem;
  font-weight: 700;
  }
  h3 {
  font-size: 1.8rem;
  line-height: 2.6rem;
  font-weight: 700;
  }
  h4 {
  font-size: 1.5rem;
  line-height: 2.3rem;
  font-weight: 700;
  }

  p {
    font-size: 1.5rem;
    line-height: 2.3rem;
    font-weight: 400;
  }


  }


`

const StyledLayout = styled.div`
  margin: 0 auto;
  max-width: 900px;
  padding: 0 15px;
  padding-top: 50px;
`

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            peterContact
            work
            homepage
            people
          }
        }
      }
    `}
    render={data => (
      <>
        <GlobalStyle />
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <StyledLayout className={`layout`}>
          <Header contact={data.site.siteMetadata.peterContact} />
          {children}
          <Footer
            work={data.site.siteMetadata.work}
            homepage={data.site.siteMetadata.homepage}
            people={data.site.siteMetadata.people}
          />
        </StyledLayout>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
