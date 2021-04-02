import React from 'react'
import { Header } from '../components/Header'
import { NavBar } from '../components/NavBar'
import { Aside } from '../components/Aside'
import { Footer } from '../components/Footer'
import { useGlobalStyles } from '../styles/Global'
import { useHomeStyles } from '../styles/pages/Home'

function Home() {
  useGlobalStyles()
  const classesHome = useHomeStyles()

  return (
    <div className={classesHome.wrapper}>
      <main className={`${classesHome.container} ${classesHome.struct}`}>
        <Header />
        <NavBar />
        <Aside />
        <Footer />
      </main>
    </div>
  )
}

export { Home }
