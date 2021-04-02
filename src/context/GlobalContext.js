import React, { createContext, useState } from 'react'

const GlobalContext = createContext()

function GlobalContextProvider({ children }) {
  const [themeActive, setThemeActive] = useState('light')

  function changeTheme() {
    if (themeActive === 'light') {
      setThemeActive('dark')
    } else {
      setThemeActive('light')
    }
  }

  return (
    <GlobalContext.Provider value={{ themeActive, changeTheme }}>
      {children}
    </GlobalContext.Provider>
  )
}

export { GlobalContext, GlobalContextProvider }
