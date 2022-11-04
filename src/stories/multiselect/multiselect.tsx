import { ArrowDropDown, ArrowDropUp } from '@mui/icons-material'
import classNames from 'classnames'
import { useState } from 'react'
import { optionsType } from 'stories/select'
import './multiselect.scss'

type Props<T extends any = number> = {
  title: string
  currentOptions: optionsType<T>[]
  options: optionsType<T>[]
  onChange: (option: optionsType<T>[]) => void
  className?: string
}

export const Multiselect = <T extends any = number>({
  title,
  currentOptions,
  options,
  onChange,
  className,
}: Props<T>) => {
  const [listStatus, setStatus] = useState(false)

  const arrayIncludesObj = (array: object[], obj: object) => {
    return array.some((arrayObj => JSON.stringify(arrayObj) === JSON.stringify(obj)))
  } 

  const handleSelectClick = (option: optionsType<T> | undefined) => {
    if (!option) onChange([])
    else if (!arrayIncludesObj(currentOptions, option)) {
      onChange([...currentOptions, option])
    } else {
      const valueIndex = currentOptions.findIndex(
        (currentOption) => JSON.stringify(currentOption) === JSON.stringify(option)
      )
      onChange([
        ...currentOptions.slice(0, valueIndex),
        ...currentOptions.slice(valueIndex + 1),
      ])
    }
    setStatus(false)
  }

  return (
    <div className="multiselect">
      <div
        className={classNames('multiselect__field', {
          'multiselect__field--unselected': currentOptions.length === 0,
          [`${className}`]: className,
        })}
        onClick={() => setStatus(!listStatus)}
      >
        {currentOptions.length === 0
          ? title
          : currentOptions.map((option) => option.label).join(', ')}
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
              'multiselect__list-item--active': arrayIncludesObj(currentOptions, option),
            })}
          >
            {option.label}
          </li>
        ))}
      </ul>
    </div>
  )
}
