import React from 'react'
import { useTasksStyles } from '../styles/components/Tasks'
import IconSearchSmall from '../assets/search-small.svg'
import IconTimer from '../assets/timer.svg'
import IconSuccessCloud from '../assets/success-cloud.svg'

function Tasks() {
  const classesTasks = useTasksStyles()

  return (
    <section className={classesTasks.tasks}>
      <div className={classesTasks.content}>
        <h2>Próximas entregas</h2>

        <div className={classesTasks.inputGroup}>
          <input type="text" placeholder="Pesquisar" />
          <span>
            <img src={IconSearchSmall} alt="Lupa" />
          </span>
        </div>

        <div className={classesTasks.tabs}>
          <div>
            <button className={`${classesTasks.tab} ${classesTasks.tabActive}`}>
              Novas
            </button>
          </div>
          <button className={classesTasks.tab}>Em andamento</button>
          <button className={classesTasks.tab}>Finalizadas</button>
        </div>

        <ul>
          <li>
            <div className={classesTasks.cardTask}>
              <header className={classesTasks.cardTaskHeader}>
                <div>
                  <img src={IconTimer} alt="Relógio" />
                  <span>Até 02/06 8h30</span>
                </div>
                <img src={IconSuccessCloud} alt="Nuvem" />
              </header>
              <h3>Lista 03 - Física Moderna - Modulo 1 - Modulo 2 - Aula 4</h3>
              <footer>
                <span>Matemática</span>
                <div>
                  <span>Ricardo</span>
                  <span>0/100</span>
                </div>
              </footer>
            </div>
          </li>
          <li>
            <div className={classesTasks.cardTask}>
              <header className={classesTasks.cardTaskHeader}>
                <div>
                  <img src={IconTimer} alt="Relógio" />
                  <span>Até 02/06 8h30</span>
                </div>
                <img src={IconSuccessCloud} alt="Nuvem" />
              </header>
              <h3>Lista 03 - Física Moderna - Modulo 1 - Modulo 2 - Aula 4</h3>
              <footer>
                <span>Matemática</span>
                <div>
                  <span>Ricardo</span>
                  <span>0/100</span>
                </div>
              </footer>
            </div>
          </li>
        </ul>
      </div>
    </section>
  )
}

export { Tasks }
