import React, { Component } from 'react'

import Layout from '../components/layout'
import { graphql } from 'gatsby'
import { Button } from '../components/button'
import ProcessBox from '../components/processBox'

import styled from 'styled-components'

const StyledOffer = styled.div`
  background-color: #fff;
`

class Offer extends Component {
  state = {
    shownBox: 0,
    data: [
      { key: 'Process 1', description: 'Text of stuff 1' },
      { key: 'Process 2', description: 'Text of stuff 2' },
      { key: 'Process 3', description: 'Text of stuff 3' },
    ],
  }

  render() {
    const processBoxes = this.state.data.map((item, i) => (
      <ProcessBox>
        <h2>{item.key}</h2>
        <p>{item.description}</p>
      </ProcessBox>
    ))
    return (
      <Layout>
        <StyledOffer>
          <h1>Process</h1>
          <p>Little journey through the process.</p>

          {processBoxes[this.state.shownBox]}

          <Button
            primary
            onClick={() => this.setState({ shownBox: this.state.shownBox - 1 })}
          >
            Previous
          </Button>
          <Button
            primary
            onClick={() => this.setState({ shownBox: this.state.shownBox + 1 })}
            float={`right`}
          >
            Next
          </Button>
        </StyledOffer>
      </Layout>
    )
  }
}

export default Offer
