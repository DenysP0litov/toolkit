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

export function compareObjects<K extends keyof T, T extends Record<K, any>>(object1: T, object2: T) {
  for (let k in object1) {
    const key = k as keyof T
    const val1 = object1[key];
    const val2 = object2[key];
    const areObjects = isObject(val1) && isObject(val2);
    if (
      (areObjects && !compareObjects(val1, val2)) ||
      (!areObjects && val1 !== val2)
    ) {
      return false;
    }
  }
  return true;
}

export function isObject<T extends object>(object: T) {
  return typeof object === 'object';
}
