import { jewelryTypeList, JewelryTypesNames, labelsList } from "../constants"
import { JewelryType, JewelryNameType, LabelType, LabelNameType } from "../types"
import { optionsType as SelectOptionType } from "stories/select"
import { OptionType as FilterOptionType } from '../types'

// const parseOptions = <T extends FilterOptionType, NameType = T['name']>(options: T[], names: Record<NameType, string>)
//   : SelectOptionType<T>[] => {
//   const selectOptions: SelectOptionType<T>[] = []

//   options.forEach((option, index) => {
//     selectOptions[index].value = option
//     selectOptions[index].label = names[option.name]
//   })

//   return selectOptions
// }

export const parseJewelryOptions = 
  (options: JewelryType[], names: Record<JewelryNameType, string>)
  : SelectOptionType<number>[] => {

  const selectOptions: SelectOptionType<number>[] = []

  options.forEach(option => {
    selectOptions.push({
      label: names[option.name],
      value: option._id
    })
  })

  return selectOptions
}

export const parseOptions = (
  options: JewelryType[] | LabelType[],
  names?: Record<JewelryNameType | LabelNameType, string>
) : SelectOptionType<number>[] => {
  const selectOptions: SelectOptionType<number>[] = []

  if (names) {
    options.forEach(option => {
      selectOptions.push({
        label: names[option.name],
        value: option._id
      })
    })
  } else {
    options.forEach(option => {
      selectOptions.push({
        label: option.name,
        value: option._id
      })
    })
  }

  return selectOptions
}

export const parseLabelOptions = 
  (options: LabelType[])
  : SelectOptionType<number>[] => {

  const selectOptions: SelectOptionType<number>[] = []

  options.forEach(option => {
    selectOptions.push({
      label: option.name,
      value: option._id
    })
  })

  return selectOptions
}

export const jewelryOptions: SelectOptionType<number>[] 
  = parseJewelryOptions(jewelryTypeList, JewelryTypesNames)

export const labelOptions: SelectOptionType<number>[]
  = parseLabelOptions(labelsList)