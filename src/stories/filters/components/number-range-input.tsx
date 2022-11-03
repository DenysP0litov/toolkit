import { FC } from "react"

export type NumberRangeType = {
  from: number
  to: number
}

type Props = {
  value: NumberRangeType
  name: string
  onChange: (value: number, option: 'from' | 'to') => void
}

export const NumberRangeInput: FC<Props> = ({value, name, onChange}) => {
  return (
    <div className="filters-form__row">
      <input
        className='
          filters-form__field 
          filters-form__field--range
        ' 
        type='number' 
        name={`min-${name}`} 
        min={0}
        onChange={(e) => onChange(+e.target.value, 'from')}
        value={value.from}
      />
      <input
        className='
          filters-form__field 
          filters-form__field--range
        ' 
        type='number' 
        name='max-price' 
        min={0}
        onChange={(e) => onChange(+e.target.value, 'to')}
        value={value.to}
      />
    </div>
  )
}