import { ArrowDropDown, ArrowDropUp } from '@mui/icons-material'
import classNames from 'classnames'
import { useState } from 'react'

type Props = {
  title: string
  currentValues: string[]
  values: string[]
  onChange: (value: string[]) => void
}

export const Multiselect: React.FC<Props> = ({
  title,
  currentValues,
  values,
  onChange,
}) => {
  const [listStatus, setStatus] = useState(false)

  const handleSelectClick = (value: string) => {
    if (!value) onChange([])
    else if (!currentValues.includes(value))
      onChange([...currentValues, value])
    else {
      const valueIndex = currentValues.findIndex(curValue => curValue = value)
      onChange(currentValues.splice(valueIndex, 1))
    }
    setStatus(false)
  }

  return (
    <div className="multiselect">
      <div
        className={classNames('multiselect__field', {
          'multiselect__field--unselected': !currentValues,
        })}
        onClick={() => setStatus(!listStatus)}
      >
        {currentValues || title}
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
          onClick={() => handleSelectClick('')}
          key="Clear"
          className="multiselect__list-item"
        >
          Clear
        </li>
        {values.map((value) => (
          <li
            onClick={() => handleSelectClick(value)}
            key={value}
            className={classNames('multiselect__list-item', {
              'multiselect__list-item--active': currentValues.includes(value),
            })}
          >
            {value}
          </li>
        ))}
      </ul>
    </div>
  )
}
