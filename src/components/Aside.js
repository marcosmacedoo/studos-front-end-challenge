import React from 'react'
import { useAsideStyles } from '../styles/components/Aside'
import { TaskCard } from '../components/TaskCard'
import IconSearchSmall from '../assets/search-small.svg'

function Aside() {
  const classesAside = useAsideStyles()

  return (
    <aside className={classesAside.tasks}>
      <div className={classesAside.content}>
        <h2>Próximas entregas</h2>

        <div className={classesAside.inputGroup}>
          <input type="text" placeholder="Pesquisar" />
          <button>
            <img src={IconSearchSmall} alt="Ícone de lupa" />
          </button>
        </div>

        <div className={classesAside.tabs}>
          <div>
            <button className={`${classesAside.tab} ${classesAside.tabActive}`}>
              Novas
            </button>
          </div>
          <button className={classesAside.tab}>Em andamento</button>
          <button className={classesAside.tab}>Finalizadas</button>
        </div>

        <ul>
          <li>
            <TaskCard type={1} alt="Fundo azul escuro" />
          </li>
          <li>
            <TaskCard type={2} alt="Fundo azul claro" />
          </li>
          <li>
            <TaskCard type={1} alt="Fundo azul escuro" />
          </li>
        </ul>
      </div>
    </aside>
  )
}

export { Aside }
