import React, { createContext, useState, useEffect } from 'react'

const GlobalContext = createContext()

function GlobalContextProvider({ children }) {
  const [themeActive, setThemeActive] = useState('light')
  const [tabActiveDataId, setTabActiveDataId] = useState('new-tasks')

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

  function changeTabActiveDataId(tabActiveDataId) {
    setTabActiveDataId(tabActiveDataId)
  }

  useEffect(() => {
    const theme = localStorage.getItem('themeActive') || 'light'

    setThemeActive(theme)
  }, [])

  return (
    <GlobalContext.Provider
      value={{
        themeActive,
        changeTheme,
        tabActiveDataId,
        changeTabActiveDataId,
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}

export { GlobalContext, GlobalContextProvider }
