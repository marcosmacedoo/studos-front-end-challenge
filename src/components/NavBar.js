import React from 'react'
import { ItemNavBar } from '../components/ItemNavBar'
import { useNavBarStyles } from '../styles/components/NavBar'

function NavBar() {
  const classesNavBar = useNavBarStyles()

  return (
    <section className={classesNavBar.sectionNavBar}>
      <nav>
        <ul>
          <li>
            <ItemNavBar
              title={'Tarefas e materiais'}
              isBgBlueLight
              alt={'Um caderno aberto'}
            />
          </li>
          <li>
            <ItemNavBar
              title={'Provas e simulados'}
              isBgBlue
              alt={'Uma caderneta com checklist, caneta e relógio'}
            />
          </li>
          <li>
            <ItemNavBar
              title={'Apostilas'}
              isBgOrange
              alt={'Dois cadernos e um lápis'}
            />
          </li>
          <li>
            <ItemNavBar
              title={'Meus treinos'}
              isBgCyan
              alt={'Um peso de academia'}
            />
          </li>
        </ul>
      </nav>
    </section>
  )
}

export { NavBar }
