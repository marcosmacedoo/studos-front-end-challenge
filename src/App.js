import React from 'react'
import { Header } from './components/Header'
import { NavBar } from './components/NavBar'
import { Tasks } from './components/Tasks'
import { useGlobalStyles } from './styles/Global'

function App() {
  const classesGlobal = useGlobalStyles()

  return (
    <>
      <Header />
      <main className={classesGlobal.container}>
        <NavBar />
        <Tasks />
      </main>
    </>
  )
}

export { App }
