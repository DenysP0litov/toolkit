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
  JewelryType,
  LabelType,
} from '../types'
import {
  compareObjects,
  createFiltersState,
  createFormState,
  parseOptions,
  useStateCallback,
} from '../utils'
import { AttributeNames, attributesList } from '../constants'
import { NumberRangeInput, NumberRangeType } from './number-range-input'
import { FiltersType } from '../types'

type Props = {
  onSubmit: () => void
  filters: FiltersType
  setFilters: (filters: FiltersType) => void
}

export type ErrorsType = Partial<Record<AttributeNameType, string>>

export type FilterFormValuesType =
  | string
  | NumberRangeType
  | (optionsType<number> | undefined)
  | optionsType<number>[]

export type FiltersFormType = Partial<
  Record<AttributeNameType, FilterFormValuesType>
>

export const FiltersForm: FC<Props> = ({ onSubmit, filters, setFilters }) => {
  const initialState = createFormState(filters)

  const [state, setState] = useState<FiltersFormType>({ ...initialState })

  const [errors, setErrors] = useStateCallback<ErrorsType>({})

  const [isReadyToSubmit, setReadyToSubmit] = useState(false)

  useEffect(() => {
    const newErrors = { ...errors }
    let newSubmitStatus = !compareObjects(state, initialState)

    for (let k in state) {
      const key = k as keyof FiltersFormType
      const type = attributesList.find(
        (attribute) => attribute.name === key
      )?.type
      let value

      switch (type) {
        case 'text':
          value = state[key] as string
          if (value.length > 100)
            newErrors[key] = `Maximal ${key} length is 100`
          else delete newErrors[key]
          break
        case 'number':
          value = state[key] as NumberRangeType
          if (+value.from > +value.to) newErrors[key] = `Invalid ${key} range`
          else if (+value.to > 1000 || +value.from > 1000)
            newErrors[key] = `Maximal ${key} value is 1000`
          else delete newErrors[key]
      }
    }

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
            options={
              parseOptions(
                options as JewelryType[] | LabelType[]
              ) as optionsType<number>[]
            }
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
    setFilters(createFiltersState(state))
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
