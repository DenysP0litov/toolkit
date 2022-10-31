export type OptionType = { name: string; _id: number }

export type AttributeNameType =
  | 'title'
  | 'description'
  | 'quantity'
  | 'price'
  | 'jewelryType'
  | 'labels'

export type AttributeTypeType = 'text' | 'number' | 'select' | 'multiselect'

export type AttributeType = {
  name: AttributeNameType
  type: AttributeTypeType
  options?: OptionType[]
}

export type JewelryNameType =
  | 'pendant'
  | 'bracelet'
  | 'necklace'
  | 'ring'
  | 'gemstone'
  | 'earring'
  | 'watch'

export type JewelryType = {
  name: JewelryNameType
  _id: number
}

export type LabelNameType =
  | 'rich'
  | 'luxury'
  | 'gold'
  | 'silver'
  | 'awesome'
  | 'neutral'
  | 'shine'
  | 'oval cut diamond'
  | 'VVS'

export type LabelType = {
  name: LabelNameType
  _id: number
}

export type FiltersType = {
  title: string // max - 100 symbols
  description: string // max - 1000 symbols
  price: [from: number, to: number] // min price = 0; max price = 1000
  quantity: [from: number, to: number] // min quantity = 0, max quantity = 100
  jewelryTypeId?: JewelryType['_id']
  labelsIds?: LabelType['_id'][]
}

export type PayloadType = {
  [K in keyof FiltersType]?: FiltersType[K]
}
