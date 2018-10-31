import React from 'react'
import { Link } from 'gatsby'

import { Anchor } from './button'
import logo from '../media/logo.png'

import styled from 'styled-components'
import GlobalStyle from './GlobalStyle'

const StyledLink = styled(Link)`
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
    <Anchor
      href={props.contact}
      float="right"
      color="white"
      backgroundColor="#50a1fd"
    >
      Lets Talk
    </Anchor>
  </>
)

export default Header
