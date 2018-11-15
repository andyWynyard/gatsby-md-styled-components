import React, { Component } from 'react'

import Layout from '../components/layout'
import { graphql } from 'gatsby'
import { Button } from '../components/button'
import ProcessBox from '../components/processBox'

import styled from 'styled-components'

import process from '../data/process'

const StyledProcess = styled.div`
  background-color: #fff;
  margin-top: 10rem;
  margin-bottom: 10rem;
  .process__heading {
  }
  .process__sub-heading {
    margin-bottom: 50px;
  }
`

class Offer extends Component {
  state = {
    shownBox: 0,
    data: process(),
  }

  render() {
    const data = this.props.data
    const processBoxes = this.state.data.map((item, i) => (
      <ProcessBox key={i}>
        <h2>
          {item.key}: {item.heading}
        </h2>
        <h4>{item.preamble}</h4>
        <p>{item.description}</p>
      </ProcessBox>
    ))
    return (
      <Layout>
        <StyledProcess>
          <h1>{data.site.siteMetadata.process.heading}</h1>
          <p className={`process__sub-heading`}>
            {data.site.siteMetadata.process.subHeading}
          </p>

          <Button
            primary
            onClick={() =>
              this.setState({
                shownBox:
                  this.state.shownBox === 0
                    ? processBoxes.length - 1
                    : this.state.shownBox - 1,
              })
            }
          >
            Previous
          </Button>
          <Button
            primary
            onClick={() =>
              this.setState({
                shownBox:
                  this.state.shownBox === processBoxes.length - 1
                    ? 0
                    : this.state.shownBox + 1,
              })
            }
            float={`right`}
          >
            Next
          </Button>
          {processBoxes[this.state.shownBox]}
        </StyledProcess>
      </Layout>
    )
  }
}

export default Offer

export const query = graphql`
  query {
    site {
      siteMetadata {
        process {
          heading
          subHeading
        }
      }
    }
  }
`
