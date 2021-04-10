import React, { useContext, useState } from 'react'
import { Tabs } from '../components/Tabs'
import { TaskList } from '../components/TaskList'
import { GlobalContext } from '../context/GlobalContext'
import { useAsideStyles } from '../styles/components/Aside'
import { useGlobalStyles } from '../styles/Global'
import IconSearchSmall from '../assets/search-small.svg'

function Aside() {
  const classesAside = useAsideStyles()
  const classesGlobal = useGlobalStyles()
  const [titleInput, setTitleInput] = useState('')
  const { taskActive, changeTaskActive, taskLists } = useContext(GlobalContext)

  function handleInputSearch(event) {
    const { value } = event.target

    setTitleInput(value)

    const [{ data }] = taskLists.filter(
      taskList => taskList.dataId === taskActive.dataId,
    )

    const removeWhiteSpacesAll = string => string.split(' ').join('')

    const filteredTask = data.filter(task => {
      const taskTitleRemovedWhiteSpaces = removeWhiteSpacesAll(
        task.title,
      ).toLowerCase()
      const titleInputRemovedWhiteSpaces = removeWhiteSpacesAll(
        value,
      ).toLowerCase()

      return taskTitleRemovedWhiteSpaces.includes(titleInputRemovedWhiteSpaces)
    })

    changeTaskActive({ dataId: taskActive.dataId, data: filteredTask })
  }

  return (
    <aside className={classesAside.tasks}>
      <h2 className={classesGlobal.gone}>Seção das Tarefas</h2>
      <div className={classesAside.content}>
        <h2>Próximas entregas</h2>

        <form className={classesAside.form}>
          <div className={classesAside.inputGroup}>
            <label htmlFor="input-search" className={classesGlobal.gone}>
              Pesquise pelo título de alguma tarefa
            </label>
            <input
              type="text"
              id="input-search"
              name="input-search"
              placeholder="Pesquisar"
              onChange={handleInputSearch}
              value={titleInput}
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
