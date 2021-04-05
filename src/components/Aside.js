import React from 'react'
import { useAsideStyles } from '../styles/components/Aside'
import { TaskCard } from '../components/TaskCard'
import IconSearchSmall from '../assets/search-small.svg'
import { useGlobalStyles } from '../styles/Global'

function Aside() {
  const classesAside = useAsideStyles()
  const classesGlobal = useGlobalStyles()
  const altsImages = {
    altTaskCardType1: 'Fundo de cor azul escuro',
    altTaskCardType2: 'Fundo de cor azul claro',
  }

  return (
    <aside className={classesAside.tasks}>
      <h2 className={classesGlobal.gone}>Seção das Tarefas</h2>
      <div className={classesAside.content}>
        <h2>Próximas entregas</h2>

        <form action="" className={classesAside.form}>
          <div className={classesAside.inputGroup}>
            <label htmlFor="input-search" className={classesGlobal.gone}>
              Pesquise por alguma tarefa
            </label>
            <input
              type="text"
              id="input-search"
              name="input-search"
              placeholder="Pesquisar"
            />
            <button type="button">
              <img src={IconSearchSmall} alt="Ícone de lupa" />
            </button>
          </div>
        </form>

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
            <TaskCard type={1} alt={altsImages.altTaskCardType1} />
          </li>
          <li>
            <TaskCard type={2} alt={altsImages.altTaskCardType2} />
          </li>
          <li>
            <TaskCard type={1} alt={altsImages.altTaskCardType1} />
          </li>
        </ul>
      </div>
    </aside>
  )
}

export { Aside }
