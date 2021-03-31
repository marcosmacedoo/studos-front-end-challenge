import React from 'react'
import { useToogleButtonStyle } from '../styles/components/ToggleButton'

function ToggleButton() {
  const classesToogleButton = useToogleButtonStyle()

  const changeTheme = () => {}

  return (
    <button className={classesToogleButton.toggleButton} onClick={changeTheme}>
      <div>
        <span></span>
      </div>
    </button>
  )
}

export { ToggleButton }
