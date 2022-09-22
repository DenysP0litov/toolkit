import classNames from 'classnames'
import { useState } from 'react'

type Tab = {
  label: string
  value: string
}

type Props = {
  tabs: Tab[]
}

export const Tabs: React.FC<Props> = ({ tabs }) => {
  const [currentTab, setCurrentTab] = useState(tabs[0].value)

  return (
    <ul className="tabs">
      {tabs.map((tab) => (
        <li
          key={tab.value}
          onClick={() => setCurrentTab(tab.value)}
          className={classNames('tabs__tab', {
            'tabs__tab-active': currentTab === tab.value,
          })}
        >
          {tab.label}
        </li>
      ))}
    </ul>
  )
}
