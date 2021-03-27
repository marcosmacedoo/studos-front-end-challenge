import React from 'react'
import { useTasksStyles } from '../styles/components/Tasks'

function Tasks() {
  const classesTasks = useTasksStyles()

  return (
    <section className={classesTasks.tasks}>
      <h1>Tasks</h1>
    </section>
  )
}

export { Tasks }
