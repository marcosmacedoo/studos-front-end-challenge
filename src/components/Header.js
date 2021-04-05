import React from 'react'
import { useHeaderStyles } from '../styles/components/Header'
import { ToggleButton } from '../components/ToggleButton'
import { useGlobalStyles } from '../styles/Global'
import Profile from '../assets/profile.svg'

function Header() {
  const classesHeader = useHeaderStyles()
  const classesGlobal = useGlobalStyles()

  return (
    <header className={classesHeader.header}>
      <h2 className={classesGlobal.gone}>Cabeçalho</h2>
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
