import React from 'react'
import styled from 'styled-components'

const StyledProcessBox = styled.div`
  background-color: ${props => props.backgroundColor};
  box-shadow: 0 0 5px 5px #ddd;
  border-radius: 4px;

  padding: 2rem;
  margin: 4rem 3rem;
`

const ProcessBox = props => {
  return (
    <StyledProcessBox backgroundColor={props.backgroundColor}>
      {props.children}
    </StyledProcessBox>
  )
}

export default ProcessBox
