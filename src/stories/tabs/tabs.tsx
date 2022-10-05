import classNames from 'classnames'
import React from 'react'
import './tabs.scss'

type Props<T = string> = {
  currentTab: T | undefined
  tabs: { label: string; value: T }[]
  onChange: (value: T) => void
}

export const Tabs = <T,>({
  currentTab,
  tabs,
  onChange,
}: React.PropsWithChildren<Props<T>>) => {
  if (!currentTab) {
    currentTab = tabs[0].value
  }

  return (
    <ul className="tabs">
      {tabs.map((tab) => (
        <li
          key={`${tab.value}`}
          onClick={() => onChange(tab.value)}
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
