import React from 'react'
import { Header } from './Header'
import { NavBar } from './NavBar'
import { Aside } from './Aside'
import { Footer } from './Footer'
import { useGlobalStyles } from '../styles/Global'
import { useMainStyles } from '../styles/components/Main'

function Main() {
  useGlobalStyles()
  const classesMain = useMainStyles()

  return (
    <div className={classesMain.wrapper}>
      <main className={`${classesMain.container} ${classesMain.struct}`}>
        <Header />
        <NavBar />
        <Aside />
        <Footer />
      </main>
    </div>
  )
}

export { Main }
