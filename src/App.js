import React from 'react'
import { Header } from './components/Header'
import { NavBar } from './components/NavBar'
import { Aside } from './components/Aside'
import { Footer } from './components/Footer'
import { useGlobalStyles } from './styles/Global'

function App() {
  const classesGlobal = useGlobalStyles()

  return (
    <main className={classesGlobal.container}>
      <Header />
      <NavBar />
      <Aside />
      <Footer />
    </main>
  )
}

export { App }
