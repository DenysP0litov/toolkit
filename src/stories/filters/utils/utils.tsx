import { jewelryTypeList, JewelryTypesNames, labelsList } from "../constants"
import { JewelryType, JewelryNameType, LabelType } from "../types"
import { optionsType as SelectOptionType } from "stories/select"

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
  : SelectOptionType<JewelryType>[] => {

  const selectOptions: SelectOptionType<JewelryType>[] = []

  options.forEach(option => {
    selectOptions.push({
      label: names[option.name],
      value: option
    })
  })

  return selectOptions
}

export const parseLabelOptions = 
  (options: LabelType[])
  : SelectOptionType<LabelType>[] => {

  const selectOptions: SelectOptionType<LabelType>[] = []

  options.forEach(option => {
    selectOptions.push({
      label: option.name,
      value: option
    })
  })

  return selectOptions
}

export const jewelryOptions: SelectOptionType<JewelryType>[] 
  = parseJewelryOptions(jewelryTypeList, JewelryTypesNames)

export const labelOptions: SelectOptionType<LabelType>[]
  = parseLabelOptions(labelsList)