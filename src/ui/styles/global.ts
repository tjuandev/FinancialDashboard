import { createGlobalStyle } from 'styled-components'
import theme from 'ui/theme'

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    background-color: #DCE5D5;
  }

  body,
  input,
  button,
  text-area {
    font-family: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  body, html, #__next {
    width: 100%;
    height: 100%;
  }

  body, button, label, textarea, input {
    color: ${theme.colors.primary};
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    background: transparent;
    border: none;

    :focus {
      outline: none;
    }
  }
`

export default GlobalStyle
