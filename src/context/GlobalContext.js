import React, { createContext, useState, useEffect } from 'react'

const GlobalContext = createContext()

function GlobalContextProvider({ children }) {
  const [themeActive, setThemeActive] = useState('light')

  function saveThemeLocalStorage(themeActive) {
    localStorage.setItem('themeActive', themeActive)
  }

  function changeTheme() {
    if (themeActive === 'light') {
      setThemeActive('dark')
      saveThemeLocalStorage('dark')
    } else {
      setThemeActive('light')
      saveThemeLocalStorage('light')
    }
  }

  useEffect(() => {
    const theme = localStorage.getItem('themeActive') || 'light'

    setThemeActive(theme)
  }, [])

  return (
    <GlobalContext.Provider value={{ themeActive, changeTheme }}>
      {children}
    </GlobalContext.Provider>
  )
}

export { GlobalContext, GlobalContextProvider }
