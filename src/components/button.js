import styled from 'styled-components'

export const Button = styled.button`
  border: none;
  background-color: inherit;
  margin: ${props => props.margin || 0};
  padding: ${props => props.padding || 0};
  width: auto;
  overflow: visible;
  font: inherit;
  outline: none;
  cursor: pointer;
  float: ${props => props.float};
  color: ${props => props.color};
  background-color: ${props => props.backgroundColor};
  border: ${props => props.border};
  border-radius: ${props => props.borderRadius};
`

export const Anchor = styled.a`
  float: ${props => props.float};
  color: ${props => props.color};
  background-color: ${props => props.backgroundColor};
  cursor: pointer;
  /* If there is a diaplay property
        it will take that property, otherwise,
        if there is no float property,
        it will be "inline-block" otherwise the
        transition property wont work */
  display: ${props =>
    props.display ? props.display : props.float ? 'inline-block' : null};
  padding: 5px 20px;
  border-radius: 200px;
  margin: 0 ${props => props.marginSide || 0}px;
  text-decoration: none;
  line-height: 20px;
  transition: all 0.3s;
  :hover {
    transform: scale(1.05);
    box-shadow: 0 4px 4px -2px #eee;
  }
`

// export const Button = styled("button")`
//   ${buttonStyle};
// `;

// export const Anchor = styled("a")`
//   ${anchorStyle};
// `;
