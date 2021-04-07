import React, { useState, useContext } from 'react'
import { Tab } from './Tab'
import { useTabsStyle } from '../styles/components/Tabs'
import { GlobalContext } from '../context/GlobalContext'

function Tabs() {
  const classesTabs = useTabsStyle()
  const [tabs, setTabs] = useState([
    { dataId: 'new-tasks', active: true, text: 'Novas' },
    { dataId: 'tasks-in-progress', active: false, text: 'Em andamento' },
    { dataId: 'completed-tasks', active: false, text: 'Finalizadas' },
  ])
  const { changeTabActiveDataId } = useContext(GlobalContext)

  function handleTabs(event) {
    const tabClickedDataId = event.target.parentElement.getAttribute('data-id')

    const tabsChange = tabs.map(tab => {
      if (tab.dataId === tabClickedDataId) {
        return { dataId: tab.dataId, active: true, text: tab.text }
      }

      return { dataId: tab.dataId, active: false, text: tab.text }
    })

    setTabs(tabsChange)

    const [tabActive] = tabsChange.filter(tab => tab.active)
    changeTabActiveDataId(tabActive.dataId)
  }

  return (
    <div className={classesTabs.tabs} onClick={handleTabs}>
      {tabs.map(tab => (
        <Tab key={tab.dataId} dataId={tab.dataId} active={tab.active}>
          {tab.text}
        </Tab>
      ))}
    </div>
  )
}

export { Tabs }
