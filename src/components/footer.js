import React from 'react'

import styled from 'styled-components'

const StyledFooter = styled.div`
  position: absolute;
  bottom: 0;
  width: 100vw;
  height: 230px;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  background-color: #333;
  color: #fff;
  .footer__content {
    padding: 30px 10px;
    margin: 0 auto;
    text-align: center;
  }

  .footer__question {
    text-transform: uppercase;
    font-size: 12px;
  }

  .footer__question--two {
    font-size: 20px;
    margin-bottom: 0;
    font-weight: bold;
  }

  .footer__links-title {
    text-transform: uppercase;
    font-size: 12px;
    margin-top: 20px;
    margin-bottom: 5px;
  }

  .footer__links {
    color: white;
    text-decoration: none;
  }
  .footer__link {
    font-size: 14px;
    font-weight: bold;
    color: white;
    text-decoration: none;
    text-transform: uppercase;
  }
`

export default props => (
  <StyledFooter>
    <div className="footer__content">
      <p className="footer__question">Want to get to know us better?</p>
      <p className="footer__question--two">
        Interested in working on projects together?
      </p>
      <p className="footer__question--two">
        Or interested in our previous work?
      </p>
      <p className="footer__links-title">Check us out here</p>
      <p className="footer__links">
        <a href={props.work} className="footer__link">
          Projects
        </a>
        {'  '}/{'  '}
        <a href={props.homepage} className="footer__link">
          Maverick Homepage
        </a>
        {'  '}/{'  '}
        <a href={props.people} className="footer__link">
          Our People
        </a>
      </p>
    </div>
  </StyledFooter>
)
