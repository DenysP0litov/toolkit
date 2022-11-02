import { optionsType as SelectOptionType, Select } from 'stories/select'

import { valuesType as MultiSelectOptionType } from 'stories/multiselect'
import { FC, FormEvent, useCallback, useEffect, useRef, useState } from "react"
import { Multiselect } from "stories/multiselect"
import { AttributeNameType, AttributeType, JewelryType, LabelType, PayloadType } from "./types"
import { parseOptions } from "./utils"
import { AttributeNames, attributesList } from './constants'
import { NumberRangeInput } from './number-range-input'


type Props = {
  onSubmit: () => void
}

type NumberRangeType = {
  from: number
  to: number
}

type ErrorsType = {
  title?: string
  description?: string
  price?: string
  quantity?: string
  jewelryType?: string
  labels?: string
}

type StateType = {
  title: string
  description: string
  price: NumberRangeType
  quantity: NumberRangeType
  jewelryType?: SelectOptionType<number>
  labels: MultiSelectOptionType<number>[]
  errors: ErrorsType
}

function useStateCallback<T>(
  initialState: T
): [T, (state: T, cb?: (state: T) => void) => void] {
  const [state, setState] = useState(initialState);
  const cbRef = useRef<((state: T) => void) | undefined>(undefined); // init mutable ref container for callbacks

  const setStateCallback = useCallback((state: T, cb?: (state: T) => void) => {
    cbRef.current = cb; // store current, passed callback in ref
    setState(state);
  }, []); // keep object reference stable, exactly like `useState`

  useEffect(() => {
    // cb.current is `undefined` on initial render,
    // so we only invoke callback on state *updates*
    if (cbRef.current) {
      cbRef.current(state);
      cbRef.current = undefined; // reset callback after execution
    }
  }, [state]);

  return [state, setStateCallback];
}

export const FiltersForm: FC<Props> = ({onSubmit}) => {
  const [state, setState] = useStateCallback<StateType>({
    title: '',
    description: '',
    price: {from: 0, to: 1000},
    quantity: {from: 0, to: 100},
    jewelryType: undefined,
    labels: [],
    errors: {},
  })

  const {title, description, price, quantity, jewelryType, labels, errors} 
    = state

  const setRange = (name: AttributeNameType) => {
    return (value: number, option: 'from' | 'to') => {
      const newRange = (state[name] as NumberRangeType)
      newRange[option] = value
      setState({...state, [name]: newRange, errors: {...errors, [name]: ''}})
    }
  }

  const setSelectOption = (name: AttributeNameType) => {
    const stateProp = state[name]
    return (option: typeof stateProp) => {
      setState({...state, [name]: option})
    }
  }

  const setMultiSelectOptions = (name: AttributeNameType) => {
    const stateProp = state[name]
    return (options: typeof stateProp) => {
      setState({...state, [name]: options})
    }
  }
  
  const renderSwitch = (attribute: AttributeType) => {
    const {type, name, options} = attribute
  
    switch (type) {
      case 'text': return (
        <>
          <input
          className='filters-form__field' 
          type='text' 
          name={name}
          placeholder={`Search by ${AttributeNames[name]}`} 
          onChange={(e) => setState({...state, [name]: e.target.value})}
          value={state[name] as string}
          />
          {errors[name] && (
            <span className='filters-form__error'>
              {errors[name]}
            </span>
          )}
        </>
      )

      case 'number': return (
        <>
          <NumberRangeInput 
            name={name}
            onChange={setRange(name)} 
            value={state[name] as NumberRangeType}
          />
          {errors[name] && (
            <span className='filters-form__error'>
              {errors[name]}
            </span>
          )}
        </>
      )

      case 'select': 
      if (options) {
        return (
          <Select
            className='filters-form__select'
            title={`Select ${AttributeNames[name]}`} 
            options={parseOptions(options as JewelryType[] | LabelType[])} 
            currentOption={state[name] as SelectOptionType<number>} 
            onChange={setSelectOption(name)}
          />
        )
      }
      break;

      case 'multiselect': return (
        <Multiselect
          title={`Select ${AttributeNames[name]}`} 
          options={parseOptions(options as JewelryType[] | LabelType[])} 
          currentOptions={state[name] as MultiSelectOptionType<number>[]}
          onChange={setMultiSelectOptions(name)}
        />
      )
    }
  }

  const clearForm = () => {
    setState({
      title: '',
      description: '',
      price: {from: 0, to: 1000},
      quantity: {from: 0, to: 100},
      jewelryType: undefined,
      labels: [],
      errors: {},
    })
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const newErrors = errors
  
    if (title.length > 100) newErrors.title 
      = 'Maximal title length is 100'

    if (description.length > 100) newErrors.description 
    = 'Maximal title ldescription is 1000'

    if (price.from > price.to) newErrors.price
    = 'Invalid price range'
    else if (price.from > 1000 || price.to > 1000) newErrors.price
    = 'Maximal price value is 1000'
    
    if (quantity.from > quantity.to) newErrors.quantity
    = 'Invalid quantity range'
    else if (quantity.from > 100 || quantity.to > 100) newErrors.quantity
    = 'Maximal price quantity is 100'

    setState({...state, errors: newErrors}, () => {
      for (let k in errors) {
        const key = k as keyof ErrorsType
        if (errors[key]) return
      }
  
      const filters: PayloadType = {
        title,
        description,
        price: [price.from, price.to],
        quantity: [quantity.from, quantity.to],
        jewelryTypeId: jewelryType?.value,
        labelsIds: labels.map(label => label.value)
      }
  
      console.log(filters)
    })
  }

  return (
    <form className='filters-form' onSubmit={(e) => handleSubmit(e)}>
      {attributesList.map(attribute => (
        <div className='filters-form__section'>
          <h2 className='filters-form__section-title'>
            {AttributeNames[attribute.name]}
          </h2>
          {renderSwitch(attribute)}
        </div>
      ))}
      <div className='filters-form__section'>
        <div className="filters-form__row">
          <button 
            className='filters-form__button' 
            type='submit'
          >
            Save changes
          </button>

          <button 
            className='filters-form__button' 
            type='button'
            onClick={clearForm}
          >
            Clear
          </button>
        </div>
      </div>
    </form>
  )
}