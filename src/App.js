import React, { useContext } from 'react'
import { ThemeProvider } from 'theming'
import { Main } from './components/Main'
import { GlobalContext } from './context/GlobalContext'
import { dark, light } from './styles/themes'

function App() {
  const { themeActive } = useContext(GlobalContext)

  function getThemeActive(themeActive) {
    return themeActive === 'light' ? light : dark
  }

  return (
    <ThemeProvider theme={getThemeActive(themeActive)}>
      <Main />
    </ThemeProvider>
  )
}

export { App }
