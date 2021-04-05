import React from 'react'
import { useFooterStyle } from '../styles/components/Footer'
import { useGlobalStyles } from '../styles/Global'
import IconAndroid from '../assets/android.svg'
import IconApple from '../assets/apple.svg'

function Footer() {
  const classesFooter = useFooterStyle()
  const classesGlobal = useGlobalStyles()

  return (
    <footer className={classesFooter.footer}>
      <h2 className={classesGlobal.gone}>Seção de rodapé</h2>
      <ul>
        <li>Termos de Uso</li>
        <li>Política de Privacidade</li>
        <li>Blog</li>
        <li>
          <img src={IconAndroid} alt="Ícone de Android" />
        </li>
        <li>
          <img src={IconApple} alt="Ícone da Apple" />
        </li>
      </ul>
    </footer>
  )
}

export { Footer }
