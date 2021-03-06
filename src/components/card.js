import React from 'react'
import styled from 'styled-components'

const StyledCard = styled.div`
  display: grid;
  .card__image-wrapper {
    width: 100%;
    margin: 2px;
    border-radius: 4px;
    height: 0;
    position: relative;
    overflow: hidden;
    padding-bottom: 75%;
    box-shadow: 1px 1px 10px #eee;
  }

  .card__img {
    width: 100%;
    height: auto;
  }

  .card__content {
    padding: 0 5px;
  }

  .card__content-level {
    float: right;
    margin-top: 16px;
    font-weight: 400;
    margin-left: 3px;
    line-height: 1.7rem;
  }

  .card__content-name {
    margin-top: 12px;
    margin-bottom: 10px;
    font-size: ${props => (props.nameFontSize > 210 ? null : '16px')};
  }

  .card__content-core-strengths--title {
    margin-bottom: 0;
    margin-top: 0;
    text-transform: uppercase;
  }
`

export default props => (
  <StyledCard nameFontSize={props.nameFontSize}>
    <div className={`card__image-wrapper`}>
      <img src={props.img} alt={props.img} className={`card__img`} />
    </div>
    <div className={`card__content`}>
      <h4 className={`card__content-level`}>{props.level}</h4>
      <h3 className={`card__content-name`}>{props.name}</h3>
      <h5 className={`card__content-core-strengths--title`}>Core Strengths</h5>
      <p>{props.strengths.map(item => item + ', ')}</p>
    </div>
  </StyledCard>
)
