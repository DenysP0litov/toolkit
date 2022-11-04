import {
  optionsType,
  optionsType as SelectOptionType,
  Select,
} from 'stories/select'
import { FC, FormEvent, useEffect, useState } from 'react'
import { Multiselect } from 'stories/multiselect'
import {
  AttributeNameType,
  AttributeType,
  FiltersType,
  JewelryType,
  LabelType,
} from '../types'
import { compareObjects, parseOptions, useStateCallback } from '../utils'
import {
  AttributeNames,
  attributesList,
  jewelryTypeList,
  labelsList,
} from '../constants'
import { NumberRangeInput, NumberRangeType } from './number-range-input'

type Props = {
  onSubmit: () => void
  filters: FiltersType
  setFilters: (filters: FiltersType) => void
}

type ErrorsType = {
  title?: string
  description?: string
  price?: string
  quantity?: string
  jewelryType?: string
  labels?: string
}

export type FiltersFormType = {
  title: string
  description: string
  price: NumberRangeType
  quantity: NumberRangeType
  jewelryType?: optionsType<number>
  labels: optionsType<number>[]
}

export const FiltersForm: FC<Props> = ({ onSubmit, filters, setFilters }) => {
  const initialState = {
    title: filters.title,
    description: filters.description,
    price: {
      from: `${filters.price[0]}`,
      to: `${filters.price[1]}`,
    },
    quantity: {
      from: `${filters.quantity[0]}`,
      to: `${filters.quantity[1]}`,
    },
    ...(filters.jewelryTypeId && {
      jewelryType: {
        label: jewelryTypeList.find(
          (type) => type._id === filters.jewelryTypeId
        )!.name,
        value: filters.jewelryTypeId,
      },
    }),
    ...((filters.labelsIds && {
      labels: filters.labelsIds.map((id) => ({
        label: labelsList.find((label) => label._id === id)!.name,
        value: id,
      })),
    }) || { labels: [] }),
  }

  const [state, setState] = useState<FiltersFormType>({ ...initialState })

  const [errors, setErrors] = useStateCallback<ErrorsType>({})

  const [isReadyToSubmit, setReadyToSubmit] = useState(false)

  const { title, description, price, quantity, jewelryType, labels } = state

  useEffect(() => {
    const newErrors = { ...errors }
    let newSubmitStatus = !compareObjects(state, initialState)
    console.log({initialState, state})

    if (title.length > 100) newErrors.title = 'Maximal title length is 100'

    if (description.length > 100)
      newErrors.description = 'Maximal title ldescription is 1000'

    if (+price.from > +price.to || +price.from < 0 || +price.to < 0)
      newErrors.price = 'Invalid price range'
    else if (+price.from > 1000 || +price.to > 1000)
      newErrors.price = 'Maximal price value is 1000'

    if (+quantity.from > +quantity.to || +quantity.from < 0 || +quantity.to < 0)
      newErrors.quantity = 'Invalid quantity range'
    else if (+quantity.from > 100 || +quantity.to > 100)
      newErrors.quantity = 'Maximal quantity value is 100'

    for (let k in newErrors) {
      const key = k as keyof ErrorsType
      if (newErrors[key]) {
        newSubmitStatus = false
      }
    }

    setErrors(newErrors)
    setReadyToSubmit(newSubmitStatus)
  }, [state])

  const setRange = (name: AttributeNameType) => {
    return (value: string, option: 'from' | 'to') => {
      if (isNaN(+value)) return

      const newRange = state[name] as { from: string; to: string }
      newRange[option] = value
      setState({
        ...state,
        [name]: newRange,
      })

      setErrors({ ...errors, [name]: '' })
    }
  }

  const setSelectOption = (name: AttributeNameType) => {
    const stateProp = state[name]
    return (option: typeof stateProp) => {
      setState({ ...state, [name]: option })
    }
  }

  const setMultiSelectOptions = (name: AttributeNameType) => {
    const stateProp = state[name]
    return (options: typeof stateProp) => {
      setState({ ...state, [name]: options })
    }
  }

  const renderSwitch = (attribute: AttributeType) => {
    const { type, name, options } = attribute

    switch (type) {
      case 'text':
        return (
          <>
            <input
              key={name}
              className="filters-form__field"
              type="text"
              name={name}
              placeholder={`Search by ${AttributeNames[name]}`}
              onChange={(e) => setState({ ...state, [name]: e.target.value })}
              value={state[name] as string}
            />
            {errors[name] && (
              <span className="filters-form__error">{errors[name]}</span>
            )}
          </>
        )

      case 'number':
        return (
          <>
            <NumberRangeInput
              name={name}
              onChange={setRange(name)}
              value={state[name] as { from: string; to: string }}
            />
            {errors[name] && (
              <span className="filters-form__error">{errors[name]}</span>
            )}
          </>
        )

      case 'select':
        if (options) {
          return (
            <Select
              className="filters-form__select"
              title={`Select ${AttributeNames[name]}`}
              options={parseOptions(options as JewelryType[] | LabelType[])}
              currentOption={state[name] as SelectOptionType<number>}
              onChange={setSelectOption(name)}
            />
          )
        }
        break

      case 'multiselect':
        return (
          <Multiselect
            className="filters-form__select"
            title={`Select ${AttributeNames[name]}`}
            options={parseOptions(options as JewelryType[] | LabelType[]) as optionsType<number>[]}
            currentOptions={state[name] as optionsType<number>[]}
            onChange={setMultiSelectOptions(name)}
          />
        )
    }
  }

  const clearForm = () => {
    setState({
      title: '',
      description: '',
      price: { from: '0', to: '1000' },
      quantity: { from: '0', to: '100' },
      jewelryType: undefined,
      labels: [],
    })
    setErrors({})
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const filters: FiltersType = {
      title,
      description,
      price: [+price.from, +price.to],
      quantity: [+quantity.from, +quantity.to],
      jewelryTypeId: jewelryType?.value,
      labelsIds: labels?.map((label) => label.value),
    }

    setFilters(filters)
    onSubmit()
  }

  return (
    <form className="filters-form" onSubmit={(e) => handleSubmit(e)}>
      {attributesList.map((attribute) => (
        <div className="filters-form__section" key={attribute.name}>
          <h2 className="filters-form__section-title">
            {AttributeNames[attribute.name]}
          </h2>
          {renderSwitch(attribute)}
        </div>
      ))}
      <div className="filters-form__section">
        <div className="filters-form__row">
          <button
            className="filters-form__button"
            type="submit"
            disabled={!isReadyToSubmit}
          >
            Save changes
          </button>

          <button
            className="filters-form__button"
            type="button"
            onClick={clearForm}
          >
            Clear
          </button>
        </div>
      </div>
    </form>
  )
}
