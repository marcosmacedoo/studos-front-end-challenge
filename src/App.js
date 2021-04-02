import React, { useContext, useEffect } from 'react'
import { ThemeProvider } from 'react-jss'
import { Home } from './pages/Home'
import { GlobalContext } from './context/GlobalContext'
import { dark, light } from './styles/themes'

function App() {
  const { themeActive } = useContext(GlobalContext)

  function getThemeActive(themeActive) {
    return themeActive === 'light' ? light : dark
  }

  useEffect(() => {}, [])

  return (
    <ThemeProvider theme={getThemeActive(themeActive)}>
      <Home />
    </ThemeProvider>
  )
}

export { App }
