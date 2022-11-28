import { createGlobalStyle } from 'styled-components'

declare module 'styled-components' {
  /* eslint-disable @typescript-eslint/no-empty-interface */
  export interface DefaultTheme {
    colors: {
      main: string
      textBase: string
      divider: string
    }
  }
}

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Roboto', sans-serif;
    box-sizing: border-box;
  }
  body {
    background-color: ${({ theme }) => theme.colors.main};
    margin: 0;
    padding: 0;
  }
`

export default GlobalStyle
