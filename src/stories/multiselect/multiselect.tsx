import { ArrowDropDown, ArrowDropUp } from '@mui/icons-material'
import classNames from 'classnames'
import { useState } from 'react'
import './multiselect.scss'

export type valuesType<T extends any = number> = {
  label: string
  value: T
}

type Props<T extends any = number> = {
  title: string
  currentOptions: valuesType<T>[]
  options: valuesType<T>[]
  onChange: (option: valuesType<T>[]) => void
}

export const Multiselect = <T extends any = number>({
  title,
  currentOptions,
  options,
  onChange,
}: Props<T>) => {
  const [listStatus, setStatus] = useState(false)

  const handleSelectClick = (option: valuesType<T> | undefined) => {
    if (!option) onChange([])
    else if (!currentOptions.includes(option))
      onChange([...currentOptions, option])
    else if (currentOptions.includes(option)) {
      const valueIndex = currentOptions.findIndex(
        currentOption => currentOption === option
      )
      onChange([
        ...currentOptions.slice(0, valueIndex),
        ...currentOptions.slice(valueIndex + 1)
      ])
    }
    setStatus(false)
  }

  return (
    <div className="multiselect">
      <div
        className={classNames('multiselect__field', {
          'multiselect__field--unselected': currentOptions.length === 0
      ,
        })}
        onClick={() => setStatus(!listStatus)}
      >
        {currentOptions.length === 0
          ? title
          : currentOptions.map(option => option.label).join(', ')
        }
        {listStatus ? (
          <ArrowDropUp className="multiselect__arrow" />
        ) : (
          <ArrowDropDown className="multiselect__arrow" />
        )}
      </div>
      <ul
        className={classNames('multiselect__list', {
          'multiselect__list--active': listStatus,
        })}
      >
        <li
          onClick={() => handleSelectClick(undefined)}
          key="Clear"
          className="multiselect__list-item"
        >
          Clear
        </li>
        {options.map((option) => (
          <li
            onClick={() => handleSelectClick(option)}
            key={option.label}
            className={classNames('multiselect__list-item', {
              'multiselect__list-item--active': currentOptions.includes(option),
            })}
          >
            {option.label}
          </li>
        ))}
      </ul>
    </div>
  )
}
