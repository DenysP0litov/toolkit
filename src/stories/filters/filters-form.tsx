import { optionsType as SelectOptionType, Select } from 'stories/select'
import { ChangeEvent, FC, useState } from "react"
import { Multiselect } from "stories/multiselect"
import { FiltersType, JewelryType, LabelType } from "./types"
import { jewelryOptions, labelOptions } from "./utils"

type Props = {
  onSubmit: () => void
}

export const FiltersForm: FC<Props> = ({onSubmit}) => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState({from: 0, to: 1000})
  const [quantity, setQuantity] = useState({from: 0, to: 100})
  const [jewelryType, setJewelryType] 
    = useState<SelectOptionType<JewelryType> | undefined>(undefined)
  const [labelsType, setLabelsType] 
    = useState<SelectOptionType<LabelType>[]>([])
  const [errors, setErrors] = useState({price: '', quantity: ''})

  const changeTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value)
  }

  const changeDescription = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(e.target.value)
  }

  const changePrice = (e: ChangeEvent<HTMLInputElement>, prop: 'from' | 'to') => {
    setPrice({ ...price, [prop]: +e.target.value })
    setErrors({...errors, price: ''})
  }

  const changeQuantity = (e: ChangeEvent<HTMLInputElement>, prop: 'from' | 'to') => {
    setQuantity({ ...quantity, [prop]: e.target.value })
    setErrors({...errors, quantity: ''})
  }

  const clearForm = () => {
    setTitle('')
    setDescription('')
    setPrice({from: 0, to: 1000})
    setQuantity({from: 0, to: 100})
    setJewelryType(undefined)
    setLabelsType([])
  }

  const validate = () => {
    if (price.from > price.to) 
      setErrors({...errors, price: 'Invalid price range'})
    else if (price.from < 0 || price.to > 1000)
      setErrors({...errors, price: 'Price must be in range 0-1000'})
    
    if (quantity.from > quantity.to) 
      setErrors({...errors, quantity: 'Invalid quantity range'})
    else if (quantity.from < 0 || quantity.to > 100)
      setErrors({...errors, quantity: 'Quantity must be in range 0-100'})
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    validate()

    if (errors.price || errors.quantity) return
    
    const filters: FiltersType = {
      title,
      description,
      price: [price.from, price.to],
      quantity: [quantity.from, quantity.to],
      jewelryTypeId: jewelryType?.value._id,
      labelsIds: labelsType.map(label => label.value._id)
    }

    console.log(filters)
    onSubmit()
  }
  

  return (
    <form className='filters-form' onSubmit={(e) => handleSubmit(e)}>
      <div className='filters-form__section'>
        <h2 className='filters-form__section-title'>
          Title
        </h2>
        <input
          className='filters-form__field' 
          type='text' 
          name='title'
          placeholder='Search by title' 
          maxLength={100}
          onChange={(e) => changeTitle(e)}
          value={title}
        />
      </div>

      <div className='filters-form__section'>
        <h2 className='filters-form__section-title'>
          Description
        </h2>
        <textarea 
          className='
            filters-form__field
            filters-form__field--textarea
          '
          placeholder='Search by description'
          maxLength={1000}
          onChange={(e) => changeDescription(e)}
          value={description}
        />
      </div>

      <div className='filters-form__section'>
        <h2 className='filters-form__section-title'>
          Price
        </h2>
        <div className="filters-form__row">
          <input
            className='
              filters-form__field 
              filters-form__field--range
            ' 
            type='number' 
            name='min-price' 
            placeholder='Minimal price' 
            min={0}
            max={1000}
            onChange={(e) => changePrice(e, 'from')}
            value={price.from}
          />
          <input
            className='
              filters-form__field 
              filters-form__field--range
            ' 
            type='number' 
            name='max-price' 
            placeholder='Maximal price'
            min={0}
            max={1000}
            onChange={(e) => changePrice(e, 'to')}
            value={price.to}
          />
        </div>
        <span className='filters-form__error' hidden={!errors.price}>
        {errors.price}
        </span>
      </div>

      <div className='filters-form__section'>
        <h2 className='filters-form__section-title'>
          Quantity
        </h2>
        <div className="filters-form__row">
          <input
            className='
              filters-form__field 
              filters-form__field--range
            ' 
            type='number' 
            name='min-quantity' 
            placeholder='Minimal quantity' 
            min={0}
            max={100}
            onChange={(e) => changeQuantity(e, 'from')}
            value={quantity.from}
          />
          <input
            className='
              filters-form__field 
              filters-form__field--range
            ' 
            type='number' 
            name='max-quantity' 
            placeholder='Maximal quantity' 
            min={0}
            max={100}
            onChange={(e) => changeQuantity(e, 'to')}
            value={quantity.to}
          />
        </div>
        <span className='filters-form__error' hidden={!errors.quantity}>
          {errors.quantity}
        </span>
      </div>

      <div className='filters-form__section'>
        <h2 className='filters-form__section-title'>
          Product type
        </h2>
        <Select
          className='filters-form__select'
          title='Select type' 
          options={jewelryOptions} 
          currentOption={jewelryType} 
          onChange={setJewelryType}
        />
      </div>

      <div className='filters-form__section'>
        <h2 className='filters-form__section-title'>
          Labels
        </h2>
        <Multiselect
          title='Select labels' 
          options={labelOptions} 
          currentOptions={labelsType} 
          onChange={setLabelsType}
        />
      </div>

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