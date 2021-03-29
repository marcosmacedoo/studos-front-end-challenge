import React from 'react'
import { useToogleButtonStyle } from '../styles/components/ToggleButton'

function ToggleButton() {
  const classesToogleButton = useToogleButtonStyle()

  return (
    <div className={classesToogleButton.containerToogleButton}>
      <button className={classesToogleButton.toogleButton}></button>
      <span className={classesToogleButton.ball}></span>
    </div>
  )
}

export { ToggleButton }
