import classNames from 'classnames'

type Tab = {
  label: string
  value: string
}

type Props = {
  currentTab: string,
  tabs: Tab[],
  onChange: (value: string) => void,
}

export const Tabs: React.FC<Props> = ({ currentTab, tabs, onChange }) => {
  return (
    <ul className="tabs">
      {tabs.map((tab) => (
        <li
          key={tab.value}
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
