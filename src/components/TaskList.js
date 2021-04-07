import React, { useContext, useEffect, useState } from 'react'
import { TaskCard } from '../components/TaskCard'
import { GlobalContext } from '../context/GlobalContext'
import { useTaskListStyle } from '../styles/components/TaskList'

function TaskList() {
  const classesTaskList = useTaskListStyle()
  const { tabActiveDataId } = useContext(GlobalContext)
  const tasksAll = [
    {
      dataId: 'new-tasks',
      data: [{ type: 1 }, { type: 1 }, { type: 1 }],
    },
    {
      dataId: 'tasks-in-progress',
      data: [{ type: 1 }, { type: 1 }, { type: 1 }, { type: 1 }, { type: 1 }],
    },
    {
      dataId: 'completed-tasks',
      data: [{ type: 2 }],
    },
  ]
  const [taskActive, setTaskActive] = useState(tasksAll[0])

  function getAltImage(type) {
    return type === 1 ? 'Fundo de cor azul escuro' : 'Fundo de cor azul claro'
  }

  function filteredTasksAll() {
    const [filteredTask] = tasksAll.filter(
      task => task.dataId === tabActiveDataId,
    )
    return filteredTask
  }

  useEffect(() => {
    const filteredTask = filteredTasksAll()
    setTaskActive(filteredTask)
  }, [tabActiveDataId])

  return (
    <ul className={classesTaskList.taskList}>
      {taskActive.data.map((task, index) => (
        <li key={index}>
          <TaskCard type={task.type} alt={getAltImage(task.type)} />
        </li>
      ))}
    </ul>
  )
}

export { TaskList }
