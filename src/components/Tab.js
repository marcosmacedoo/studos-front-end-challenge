import React from 'react'
import { useTabStyle } from '../styles/components/Tab'

function Tab(props) {
  const classesTab = useTabStyle()
  return (
    <>
      {props.active ? (
        <div
          data-id={props.dataId}
          className={`${classesTab.tab} ${classesTab.tabActive}`}
        >
          <button>{props.children}</button>
          <span></span>
        </div>
      ) : (
        <div data-id={props.dataId} className={classesTab.tab}>
          <button>{props.children}</button>
        </div>
      )}
    </>
  )
}

export { Tab }
