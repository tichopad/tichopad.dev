import React from 'react'
import { ThemeProvider as EmotionThemeProvider } from 'emotion-theming'
import { options, rhythm, scale } from 'utils/typography'

const theme = {
  rhythm,
  scale,
  ...options,
}

const ThemeProvider = ({ children }) => (
  <EmotionThemeProvider theme={theme}>{children}</EmotionThemeProvider>
)

export default ThemeProvider
