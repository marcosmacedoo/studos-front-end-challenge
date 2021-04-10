import React, { useEffect, useContext } from 'react'
import { TaskCard } from '../components/TaskCard'
import { useTaskListStyle } from '../styles/components/TaskList'
import { GlobalContext } from '../context/GlobalContext'
import { compareTasksDate } from '../utils/Utils'
import dataJSON from '../data/tasks.json'

function TaskList() {
  const classesTaskList = useTaskListStyle()
  const {
    tabActiveDataId,
    taskActive,
    taskLists,
    changeTaskActive,
    changeTaskLists,
  } = useContext(GlobalContext)

  useEffect(() => {
    const tasksJSON = dataJSON.data.entities

    const tasksWithChangedDates = tasksJSON.map(task => {
      return {
        ...task,
        date: new Date(task.date),
      }
    })

    const tasksOrderedByDate = tasksWithChangedDates
      .sort(compareTasksDate)
      .reverse()

    const newTasks = []
    const tasksInProgress = []
    const completedTasks = []

    tasksOrderedByDate.forEach(task =>
      task.started ? tasksInProgress.push(task) : newTasks.push(task),
    )

    changeTaskLists([
      { dataId: 'new-tasks', data: newTasks },
      { dataId: 'tasks-in-progress', data: tasksInProgress },
      { dataId: 'completed-tasks', data: completedTasks },
    ])
  }, [])

  useEffect(() => {
    if (taskLists.length > 0) {
      const [filteredTask] = taskLists.filter(
        task => task.dataId === tabActiveDataId,
      )

      changeTaskActive(filteredTask)
    } else {
      changeTaskActive({ dataId: '', data: [] })
    }
  }, [taskLists, tabActiveDataId])

  function getAltImage(type) {
    let alt = 'Fundo azul escuro'

    if (type === 2) {
      alt = 'Fundo azul claro'
    }

    return alt
  }

  return (
    <ul className={classesTaskList.taskList}>
      {taskActive.data.map((task, index) => (
        <li key={String(index)}>
          <TaskCard task={{ ...task, altImage: getAltImage(task.type) }} />
        </li>
      ))}
    </ul>
  )
}

export { TaskList }
