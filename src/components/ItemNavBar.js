import React from 'react'
import { useItemNavBarStyles } from '../styles/components/ItemNavBar'
import ArrowLeft from '../assets/arrow-right.svg'
import BackgroundImageLargeBlueLight from '../assets/bg-large-blue-light.svg'
import BackgroundImageLargeBlue from '../assets/bg-large-blue.svg'
import BackgroundImageLargeOrange from '../assets/bg-large-orange.svg'
import BackgroundImageLargeCyan from '../assets/bg-large-cyan.svg'

function getBackgroundImage(props) {
  if (props.isBgBlueLight) {
    return BackgroundImageLargeBlueLight
  } else if (props.isBgBlue) {
    return BackgroundImageLargeBlue
  } else if (props.isBgOrange) {
    return BackgroundImageLargeOrange
  } else if (props.isBgCyan) {
    return BackgroundImageLargeCyan
  }
}

function ItemNavBar(props) {
  const classesItemNavBar = useItemNavBarStyles(props)

  return (
    <article className={classesItemNavBar.itemNavBar}>
      <img src={getBackgroundImage(props)} alt={props.alt} />
      <div>
        <h3>{props.title}</h3>
        <img src={ArrowLeft} alt="Seta para direita" />
      </div>
    </article>
  )
}

export { ItemNavBar }
