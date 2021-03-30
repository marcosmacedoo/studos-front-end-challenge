import React from 'react'
import { useHeaderStyles } from '../styles/components/Header'
import { ToggleButton } from '../components/ToggleButton'
import Profile from '../assets/profile.svg'

function Header() {
  const headerClasses = useHeaderStyles()

  return (
    <header className={headerClasses.header}>
      <div>
        <img src={Profile} alt="Profile" />
        <h1>Olá, João Paulo</h1>
      </div>
      <div>
        <label htmlFor="toggle-button">
          <strong>Modo escuro</strong>
        </label>
        <ToggleButton />
      </div>
    </header>
  )
}

export { Header }
