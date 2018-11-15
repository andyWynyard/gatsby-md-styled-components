import React from 'react'
import { Anchor } from './button'

import styled from 'styled-components'

const StyledCTA = styled.div`
  background-color: #f7f7f7;
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;

  .cta__content {
    padding: 40px;
    margin: 0 auto;
    text-align: center;
  }

  .cta__statement {
    text-transform: uppercase;
    margin-bottom: 0;
    margin-top: 0;
    font-size: 1.2rem;
    font-weight: normal;
  }

  .cta__question {
    margin-bottom: 20px;
    margin-top: 0.5rem;
    font-weight: bold;
    font-size: 2rem;
  }
`

export default props => (
  <StyledCTA>
    <div
      className={`
          cta__content
        `}
    >
      <h6 className="cta__statement">Your Creative Digital Experts</h6>

      <h3 className="cta__question">
        Find a consultant you found interesting?
      </h3>

      <Anchor primary href={props.contact}>
        Lets Talk
      </Anchor>
    </div>
  </StyledCTA>
)
