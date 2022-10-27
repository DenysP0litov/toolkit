import { ArrowDropDown, ArrowDropUp } from '@mui/icons-material'
import classNames from 'classnames'
import { useState } from 'react'
import './select.scss'

export type optionsType<T extends any = number> = {
  label: string
  value: T
}

type Props<T extends any = number> = {
  title: string
  currentOption: optionsType<T> | undefined
  options: optionsType<T>[]
  onChange: (value: optionsType<T> | undefined) => void
}

export const Select = <T extends any = number>({
  title,
  currentOption,
  options,
  onChange,
}: Props<T>) => {
  const [isOpened, setOpened] = useState(false)

  const changeSelect = (option: optionsType<T> | undefined) => {
    onChange(option)
    setOpened(false)
  }

  return (
    <div className="select">
      <div
        className={classNames('select__field', {
          'select__field--unselected': !currentOption,
        })}
        onClick={() => setOpened(!isOpened)}
      >
        {currentOption
          ? currentOption.label 
          : title
        }
        {isOpened ? (
          <ArrowDropUp className="select__arrow" />
        ) : (
          <ArrowDropDown className="select__arrow" />
        )}
      </div>
      <ul
        className={classNames('select__list', {
          'select__list--active': isOpened,
        })}
      >
        <li
          onClick={() => changeSelect(undefined)}
          key="None"
          className="select__list-item"
        >
          None
        </li>
        {options.map((option) => (
          <li
            onClick={() => changeSelect(option)}
            key={option.label}
            className={classNames('select__list-item', {
              'select__list-item--active': option === currentOption,
            })}
          >
            {option.label}
          </li>
        ))}
      </ul>
    </div>
  )
}
