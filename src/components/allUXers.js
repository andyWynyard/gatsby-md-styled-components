import React from 'react'
import Card from './card'
import { Link } from 'gatsby'

import styled from 'styled-components'

const Wrapper = styled.div`
  background-color: ${props => props.bgColor};
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
`
const Inner = styled.div`
  display: grid;
  grid-template-columns: repeat(
    auto-fill,
    minmax(${props => props.width}px, 1fr)
  );
  grid-gap: 18px;
  justify-content: center;
  margin: 0 auto;

  padding: 20px 10px 100px 10px;
  max-width: 900px;
`

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`

export default props => (
  <Wrapper bgColor={props.bgColor}>
    <Inner width={props.width}>
      {props.data.map(item => {
        return (
          <div key={item.node.id}>
            <StyledLink to={item.node.fields.slug}>
              <Card
                strengths={item.node.frontmatter.strengths}
                level={item.node.frontmatter.level}
                name={item.node.frontmatter.name}
                nameFontSize={props.width}
                img={
                  item.node.frontmatter.cover_image.childImageSharp.fluid.src
                }
              />
            </StyledLink>
          </div>
        )
      })}
    </Inner>
  </Wrapper>
)
