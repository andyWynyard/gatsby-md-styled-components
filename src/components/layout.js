import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import styled, { ThemeProvider } from 'styled-components'
import Footer from './footer'
import Header from './header'

const StyledLayout = styled.div`
  margin: 0 auto;
  max-width: 900px;
  padding: 0;
  padding-top: 50px;
  min-height: 100vh;
  position: relative;
`

const StyledBody = styled.div`
  padding-bottom: 230px;
`
const theme = {
  primary: '#50a1fd',
  secondary: 'rgb(0, 180, 96)',
}

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
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        >
          <html lang="en" />
        </Helmet>

        <ThemeProvider theme={theme}>
          <StyledLayout className={`layout`}>
            <Header contact={data.site.siteMetadata.peterContact} />
            <StyledBody>{children}</StyledBody>
            <Footer
              work={data.site.siteMetadata.work}
              homepage={data.site.siteMetadata.homepage}
              people={data.site.siteMetadata.people}
            />
          </StyledLayout>
        </ThemeProvider>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
