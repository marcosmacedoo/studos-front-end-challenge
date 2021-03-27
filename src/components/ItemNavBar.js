import React from 'react'
import { useItemNavBarStyles } from '../styles/components/ItemNavBar'
import ArrowLeft from '../assets/arrow-right.svg'

function ItemNavBar(props) {
  const classesItemNavBar = useItemNavBarStyles(props)

  return (
    <div className={classesItemNavBar.itemNavBar}>
      <strong>{props.title}</strong>
      <img src={ArrowLeft} alt="Seta para direita" />
    </div>
  )
}

export { ItemNavBar }
