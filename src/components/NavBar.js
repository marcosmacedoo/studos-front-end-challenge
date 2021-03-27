import React from 'react'
import { useNavBarStyles } from '../styles/components/NavBar'
import ArrowLeft from '../assets/arrow-right.svg'

function NavBar() {
  const classesNavBar = useNavBarStyles()

  return (
    <nav className={classesNavBar.navbar}>
      <ul>
        <li>
          <div className={classesNavBar.itemCardLarge}>
            <strong>Tarefas e materiais</strong>
            <img src={ArrowLeft} alt="Seta para direita" />
          </div>
        </li>
      </ul>
    </nav>
  )
}

export { NavBar }
