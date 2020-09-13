/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
const React = require('react')
const { ThemeProvider } = require('styled-components')
const theme = require('./src/styles/theme')

exports.wrapRootElement = ({ element }) => (
  <ThemeProvider theme={theme}>{element}</ThemeProvider>
)
