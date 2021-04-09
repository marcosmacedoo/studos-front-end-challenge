import React, { useEffect, useState, useContext } from 'react'
import { TaskCard } from '../components/TaskCard'
import { useTaskListStyle } from '../styles/components/TaskList'
import { GlobalContext } from '../context/GlobalContext'
import dataJSON from '../data/tasks.json'

function TaskList() {
  const classesTaskList = useTaskListStyle()
  const [tasks, setTasks] = useState([])
  const [taskActive, setTaskActive] = useState([])
  const { tabActiveDataId } = useContext(GlobalContext)

  useEffect(() => {
    const tasksJSON = dataJSON.data.entities

    const tasksWithChangedDates = tasksJSON.map(task => {
      return {
        ...task,
        date: new Date(task.date),
      }
    })

    const compareDates = (taskOne, taskTwo) => {
      if (taskOne.date > taskTwo.date) {
        return 1
      } else if (taskOne.date < taskTwo.date) {
        return -1
      }

      return 0
    }

    const tasksOrderedByDate = tasksWithChangedDates
      .sort(compareDates)
      .reverse()

    const newTasks = []
    const tasksInProgress = []
    const completedTasks = []

    tasksOrderedByDate.forEach(task =>
      task.started ? tasksInProgress.push(task) : newTasks.push(task),
    )

    setTasks([
      { dataId: 'new-tasks', data: newTasks },
      { dataId: 'tasks-in-progress', data: tasksInProgress },
      { dataId: 'completed-tasks', data: completedTasks },
    ])
  }, [])

  useEffect(() => {
    if (tasks.length > 0) {
      const [filteredTask] = tasks.filter(
        task => task.dataId === tabActiveDataId,
      )

      setTaskActive(filteredTask.data)
    } else {
      setTaskActive([])
    }
  }, [tasks, tabActiveDataId])

  function getAltImage(type) {
    let alt = 'Fundo azul escuro'

    if (type === 2) {
      alt = 'Fundo azul claro'
    }

    return alt
  }

  return (
    <ul className={classesTaskList.taskList}>
      {taskActive.map((task, index) => (
        <li key={String(index)}>
          <TaskCard task={{ ...task, altImage: getAltImage(task.type) }} />
        </li>
      ))}
    </ul>
  )
}

export { TaskList }
