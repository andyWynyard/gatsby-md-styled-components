import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import { Anchor } from './button'
import logo from '../media/logo.png'

import GlobalStyle from './globalStyle'

const StyledLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  margin: 0 auto;
  max-width: 900px;
  padding-top: 50px;
  .layout__link {
    width: 140px;
  }
`

const Header = props => (
  <>
    <GlobalStyle />
    <StyledLink to={`/`}>
      <img className={`layout__link`} src={logo} alt={logo} />
    </StyledLink>
    <Anchor primary href={props.contact} float="right">
      Lets Talk
    </Anchor>
    <Anchor primary marginSide={10} float="right">
      <StyledLink to="/process">The UX Process</StyledLink>
    </Anchor>
  </>
)

export default Header
