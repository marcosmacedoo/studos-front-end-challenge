import React from 'react'
import { useTaskCardStyle } from '../styles/components/TaskCard'
import { formatNumber } from '../utils/Utils'
import BgSmallBlueLight from '../assets/bg-small-blue-light.svg'
import BgSmallBlue from '../assets/bg-small-blue.svg'
import IconTimer from '../assets/timer.svg'
import IconSuccessCloud from '../assets/success-cloud.svg'

function getPathBackgroundTaskCard(type) {
  if (type === 1) {
    return BgSmallBlue
  }

  return BgSmallBlueLight
}

function TaskCard(props) {
  const classesTaskCard = useTaskCardStyle()

  function formatDate(date) {
    const day = formatNumber(date.getDate())
    const month = formatNumber(date.getMonth() + 1)

    const formattedDate = `${day}/${month}`

    return formattedDate
  }

  return (
    <div className={classesTaskCard.taskCard}>
      <img
        src={getPathBackgroundTaskCard(props.task.type)}
        alt={props.task.altImage}
      />
      <article>
        <header>
          <div>
            <img src={IconTimer} alt="Ícone de relógio" />
            <span>Até {formatDate(props.task.date)} 8h30</span>
          </div>
          <img
            src={IconSuccessCloud}
            alt="Ícone de nuvem com sinal de conluído"
          />
        </header>
        <main>
          <h3>{props.task.title}</h3>
        </main>
        <footer>
          <span>{props.task.subject}</span>
          <div>
            <span>{props.task.teacher}</span>
            <span>
              {props.task.questionsCompleted}/{props.task.questions}
            </span>
          </div>
        </footer>
      </article>
    </div>
  )
}

export { TaskCard }
