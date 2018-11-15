import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Montserrat:400,700');

html {
    box-sizing: border-box;
    font-size: 10px;
    height: 100%;
    padding: 0;
    margin: 0;
  }
  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }
  body {
    height:100vh;
    font-family: 'Montserrat', sans-serif;
    margin: 0 1rem;
    padding: 0;
    font-size: 1.5rem;
    line-height: 2;

    h1 {
      font-size: 3.3rem;
      line-height: 4.1rem;
      font-weight: 700;
    }
    h2 {
      font-size: 3.2rem;
      line-height: 3.1rem;
      font-weight: 700;
    }
    h3 {
      font-size: 1.8rem;
      line-height: 2.6rem;
      font-weight: 700;
    }
    h4 {
      font-size: 1.5rem;
      line-height: 2.3rem;
      font-weight: 700;
    }

    p {
      font-size: 1.5rem;
      line-height: 2.3rem;
      font-weight: 400;
      margin-block-end: 0;
      margin-block-start: 0;
      margin-bottom: 1.45rem;
    }
  }
`

export default GlobalStyle
