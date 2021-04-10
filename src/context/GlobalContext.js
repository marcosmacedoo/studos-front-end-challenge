import React, { createContext, useState, useEffect } from 'react'

const GlobalContext = createContext()

function GlobalContextProvider({ children }) {
  const [themeActive, setThemeActive] = useState('light')
  const [tabActiveDataId, setTabActiveDataId] = useState('new-tasks')
  const [taskActive, setTaskActive] = useState({ dataId: '', data: [] })
  const [taskLists, setTaskLists] = useState([])

  function changeTaskLists(newTaskLists) {
    setTaskLists(newTaskLists)
  }

  function changeTaskActive(task) {
    setTaskActive(task)
  }

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
        taskActive,
        taskLists,
        changeTabActiveDataId,
        changeTaskActive,
        changeTaskLists,
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}

export { GlobalContext, GlobalContextProvider }
