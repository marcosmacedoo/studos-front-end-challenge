import React from 'react'
import { useGlobalStyles } from '../styles/Global'
import { useHeaderStyles } from '../styles/components/Header'
import Profile from '../assets/profile.svg'

function Header() {
  const globalClasses = useGlobalStyles()
  const headerClasses = useHeaderStyles()

  return (
    <header className={`${globalClasses.container} ${headerClasses.header}`}>
      <div>
        <img src={Profile} alt="Profile" />
        <h1>Olá, João Paulo</h1>
      </div>
      <div>
        <strong>Modo escuro</strong>
      </div>
    </header>
  )
}

export { Header }
