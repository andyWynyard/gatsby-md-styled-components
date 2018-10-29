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
    margin-bottom: 10px;
    font-weight: normal;
  }

  .cta__question {
    margin-bottom: 25px;
    font-weight: bold;
  }

  .cta__button {
    margin-top: 20px;
    text-decoration: none;
    background-color: #1e66fb;
    color: #fff;
    padding: 10px 30px;
    border-radius: 4px;
    font-size: 14px;
    box-shadow: 0 3px 3px -2px #999;
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

      <Anchor href={props.contact} color="white" backgroundColor="#50a1fd">
        Lets Talk
      </Anchor>
    </div>
  </StyledCTA>
)
