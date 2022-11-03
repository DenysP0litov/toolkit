import { FC } from "react"

export type NumberRangeType = {
  from: string
  to: string
}

type Props = {
  value: NumberRangeType
  name: string
  onChange: (value: string, option: 'from' | 'to') => void
}

export const NumberRangeInput: FC<Props> = ({value, name, onChange}) => {
  const handleBlur = (value: string, option: 'from' | 'to') => {
    if (value === '') onChange('0', option)
  }

  return (
    <div className="filters-form__row">
      <input
        className='
          filters-form__field 
          filters-form__field--range
        ' 
        type='text' 
        name={`min-${name}`} 
        onChange={(e) => onChange(e.target.value, 'from')}
        onBlur={(e) => handleBlur(e.target.value, 'from')}
        value={value.from}
      />
      <input
        className='
          filters-form__field 
          filters-form__field--range
        ' 
        type='text' 
        name='max-price'
        onChange={(e) => onChange(e.target.value, 'to')}
        onBlur={(e) => handleBlur(e.target.value, 'to')}
        value={value.to}
      />
    </div>
  )
}