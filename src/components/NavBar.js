import React from 'react'
import { ItemNavBar } from '../components/ItemNavBar'
import { useNavBarStyles } from '../styles/components/NavBar'
import IconAndroid from '../assets/android.svg'
import IconApple from '../assets/apple.svg'

function NavBar() {
  const classesNavBar = useNavBarStyles()

  return (
    <section className={classesNavBar.sectionNavBar}>
      <nav>
        <ul>
          <li>
            <ItemNavBar title={'Tarefas e materiais'} isBgBlueLight />
          </li>
          <li>
            <ItemNavBar title={'Provas e simulados'} isBgBlue />
          </li>
          <li>
            <ItemNavBar title={'Apostilas'} isBgOrange />
          </li>
          <li>
            <ItemNavBar title={'Meus treinos'} isBgCyan />
          </li>
        </ul>
      </nav>

      <footer>
        <div>
          <span>Termos de Uso</span>
          <span>Política de Privacidade</span>
          <span>Blog</span>
          <img src={IconAndroid} alt="Android" />
          <img src={IconApple} alt="Apple" />
        </div>
      </footer>
    </section>
  )
}

export { NavBar }
