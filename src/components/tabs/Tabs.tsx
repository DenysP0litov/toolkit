import classNames from 'classnames'
import React from 'react'

type Props<T> = {
  currentTab: T
  tabs: { label: string; value: T }[]
  onChange: (value: T) => void
}

export const Tabs = <T,>({
  currentTab,
  tabs,
  onChange,
}: React.PropsWithChildren<Props<T>>) => {
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
