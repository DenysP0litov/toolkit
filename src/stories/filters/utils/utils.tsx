import { JewelryType, JewelryNameType, LabelType, LabelNameType } from "../types"
import { optionsType as SelectOptionType } from "stories/select"
import { useState, useRef, useCallback, useEffect } from "react"

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

export function useStateCallback<T>(
  initialState: T
): [T, (state: T, cb?: (state: T) => void) => void] {
  const [state, setState] = useState(initialState)
  const cbRef = useRef<((state: T) => void) | undefined>(undefined) // init mutable ref container for callbacks

  const setStateCallback = useCallback((state: T, cb?: (state: T) => void) => {
    cbRef.current = cb 
    setState(state)
  }, []) 

  useEffect(() => {
    if (cbRef.current) {
      cbRef.current(state)
      cbRef.current = undefined 
    }
  }, [state])

  return [state, setStateCallback]
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

export const compareObjects = <T extends object>(obj1: T, obj2: T) => {
  return JSON.stringify(obj1) === JSON.stringify(obj2)
}

export function isObject<T extends object>(object: T) {
  return typeof object === 'object';
}
