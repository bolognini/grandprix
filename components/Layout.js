import React, { Fragment } from 'react'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import reset from 'styled-reset'
import { lighten } from 'polished'

const theme = {
  black: '#313638',
  white: '#FBFBFB',
  toryBlue: '#104FB9',
  mariner: '#2262CC',
  brightRed: '#b00000',
  hoverMariner: lighten(0.2, '#2262CC'),
  hoverToryBlue: lighten(0.4, '#104FB9'),
  fontFamily: 'Lato',
  inputBoxShadow: '0 2px 10px 2px rgba(0, 0, 0, 0.07)',
}

export const GlobalStyle = createGlobalStyle`
  ${reset}
  @import url('https://fonts.googleapis.com/css?family=Lato:300,400,700');

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: ${props => props.theme.fontFamily}, sans-serif;
    font-weight: lighter;
    color: ${props => props.theme.black};
    background-color: ${props => props.theme.white};
  }

  a {
    text-decoration: none;
    color: ${props => props.theme.mariner};
    transition: 0.2s ease-in;

    &:hover {
      color: ${props => props.theme.hoverMariner};
      transition: 0.2s ease-out;
    }
  }
`

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <Fragment>
        <GlobalStyle />
        {children}
      </Fragment>
    </ThemeProvider>
  )
}

export default Layout