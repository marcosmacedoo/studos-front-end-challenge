import React, { useEffect, useState, useContext } from 'react'
import { TaskCard } from '../components/TaskCard'
import { useTaskListStyle } from '../styles/components/TaskList'
import { GlobalContext } from '../context/GlobalContext'
import tasksJSON from '../data/tasks.json'

function TaskList() {
  const classesTaskList = useTaskListStyle()
  const [tasks, setTasks] = useState(tasksJSON.data.entities)
  const [newTasks, setNewTasks] = useState([])
  const [tasksInProgress, setTasksInProgress] = useState([])
  const [taskActive, setTaskActive] = useState([])
  const { tabActiveDataId } = useContext(GlobalContext)

  function getAltImage(type) {
    let alt = 'Fundo azul escuro'

    if (type === 2) {
      alt = 'Fundo azul claro'
    }

    return alt
  }

  useEffect(() => {
    const filteredNewTasks = tasks.filter(task => !task.started)
    setNewTasks(filteredNewTasks)

    const filteredTasksInProgress = tasks.filter(task => task.started)
    setTasksInProgress(filteredTasksInProgress)
  }, [])

  useEffect(() => {
    setTasks([
      { dataId: 'new-tasks', data: newTasks },
      { dataId: 'tasks-in-progress', data: tasksInProgress },
    ])
  }, [newTasks, tasksInProgress])

  useEffect(() => {
    const [filteredTaskActive] = tasks.filter(
      task => task.dataId === tabActiveDataId,
    )

    if (filteredTaskActive) {
      setTaskActive(filteredTaskActive.data)
    } else {
      setTaskActive([])
    }
  }, [taskActive, tabActiveDataId])

  return (
    <ul className={classesTaskList.taskList}>
      {taskActive.map((task, index) => (
        <li key={index}>
          <TaskCard task={{ ...task, altImage: getAltImage(task.type) }} />
        </li>
      ))}
    </ul>
  )
}

export { TaskList }
