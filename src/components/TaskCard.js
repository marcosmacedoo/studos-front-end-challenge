import React from 'react'
import { useTaskCardStyle } from '../styles/components/TaskCard'
import BgSmallBlueLight from '../assets/bg-small-blue-light.svg'
import BgSmallBlue from '../assets/bg-small-blue.svg'
import IconTimer from '../assets/timer.svg'
import IconSuccessCloud from '../assets/success-cloud.svg'

function getPathBackgroundTaskCard(props) {
  if (props.type === 1) {
    return BgSmallBlue
  }

  return BgSmallBlueLight
}

function TaskCard(props) {
  const classesTaskCard = useTaskCardStyle()

  return (
    <div className={classesTaskCard.taskCard}>
      <img src={getPathBackgroundTaskCard(props)} alt={props.alt} />
      <div>
        <header>
          <div>
            <img src={IconTimer} alt="Ícone de relógio" />
            <span>Até 02/06 8h30</span>
          </div>
          <img
            src={IconSuccessCloud}
            alt="Ícone de nuvem com sinal de conluído"
          />
        </header>
        <main>
          <h3>Lista 03 - Física Moderna - Modulo 1 - Modulo 2 - Aula 4</h3>
        </main>
        <footer>
          <span>Matemática</span>
          <div>
            <span>Ricardo</span>
            <span>0/100</span>
          </div>
        </footer>
      </div>
    </div>
  )
}

export { TaskCard }
