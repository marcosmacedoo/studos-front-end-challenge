import React from 'react'
import { useFooterStyle } from '../styles/components/Footer'
import IconAndroid from '../assets/android.svg'
import IconApple from '../assets/apple.svg'

function Footer() {
  const classesFooter = useFooterStyle()

  return (
    <footer className={classesFooter.footer}>
      <div>
        <span>Termos de Uso</span>
        <span>Política de Privacidade</span>
        <span>Blog</span>
        <img src={IconAndroid} alt="Ícone de Android" />
        <img src={IconApple} alt="Ícone da Apple" />
      </div>
    </footer>
  )
}

export { Footer }
