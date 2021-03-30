import React from 'react'
import { useAsideStyles } from '../styles/components/Aside'
import IconSearchSmall from '../assets/search-small.svg'
import IconTimer from '../assets/timer.svg'
import IconSuccessCloud from '../assets/success-cloud.svg'

function Aside() {
  const classesAside = useAsideStyles()

  return (
    <aside className={classesAside.tasks}>
      <div className={classesAside.content}>
        <h2>Próximas entregas</h2>

        <div className={classesAside.inputGroup}>
          <input type="text" placeholder="Pesquisar" />
          <button>
            <img src={IconSearchSmall} alt="Lupa" />
          </button>
        </div>

        <div className={classesAside.tabs}>
          <div>
            <button className={`${classesAside.tab} ${classesAside.tabActive}`}>
              Novas
            </button>
          </div>
          <button className={classesAside.tab}>Em andamento</button>
          <button className={classesAside.tab}>Finalizadas</button>
        </div>

        <ul>
          <li>
            <div className={classesAside.cardTask}>
              <header>
                <div>
                  <img src={IconTimer} alt="Relógio" />
                  <span>Até 02/06 8h30</span>
                </div>
                <img src={IconSuccessCloud} alt="Nuvem" />
              </header>
              <main>
                <h3>
                  Lista 03 - Física Moderna - Modulo 1 - Modulo 2 - Aula 4
                </h3>
              </main>
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
            <div className={classesAside.cardTask}>
              <header className={classesAside.cardTaskHeader}>
                <div>
                  <img src={IconTimer} alt="Relógio" />
                  <span>Até 02/06 8h30</span>
                </div>
                <img src={IconSuccessCloud} alt="Nuvem" />
              </header>
              <main>
                <h3>
                  Lista 03 - Física Moderna - Modulo 1 - Modulo 2 - Aula 4
                </h3>
              </main>
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
    </aside>
  )
}

export { Aside }
