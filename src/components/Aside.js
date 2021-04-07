import React from 'react'
import { Tabs } from '../components/Tabs'
import { TaskList } from '../components/TaskList'
import { useAsideStyles } from '../styles/components/Aside'
import { useGlobalStyles } from '../styles/Global'
import IconSearchSmall from '../assets/search-small.svg'

function Aside() {
  const classesAside = useAsideStyles()
  const classesGlobal = useGlobalStyles()

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

        <Tabs />
        <TaskList />
      </div>
    </aside>
  )
}

export { Aside }
