import React, { useContext } from 'react'
import { useToogleButtonStyle } from '../styles/components/ToggleButton'
import { GlobalContext } from '../context/GlobalContext'

function ToggleButton(props) {
  const classesToogleButton = useToogleButtonStyle(props)
  const { changeTheme, themeActive } = useContext(GlobalContext)

  function getClassStateToggleButton(themeActive) {
    return themeActive === 'light'
      ? classesToogleButton.notActive
      : classesToogleButton.active
  }

  return (
    <button
      className={`${
        classesToogleButton.toggleButton
      } ${getClassStateToggleButton(themeActive)}`}
      onClick={changeTheme}
    >
      <div>
        <span></span>
      </div>
    </button>
  )
}

export { ToggleButton }
