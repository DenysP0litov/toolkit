import {
  JewelryType,
  JewelryNameType,
  LabelType,
  LabelNameType,
  AttributeType,
  FiltersType,
} from '../types'
import { optionsType, optionsType as SelectOptionType } from 'stories/select'
import { useState, useRef, useCallback, useEffect } from 'react'
import { NumberRangeType, FiltersFormType } from '../components'
import { attributesList } from '../constants'

export const parseOptions = (
  options: JewelryType[] | LabelType[],
  names?: Record<JewelryNameType | LabelNameType, string>
): SelectOptionType<number>[] => {
  const selectOptions: SelectOptionType<number>[] = []

  if (names) {
    options.forEach((option) => {
      selectOptions.push({
        label: names[option.name],
        value: option._id,
      })
    })
  } else {
    options.forEach((option) => {
      selectOptions.push({
        label: option.name,
        value: option._id,
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

export const parseLabelOptions = (
  options: LabelType[]
): SelectOptionType<number>[] => {
  const selectOptions: SelectOptionType<number>[] = []

  options.forEach((option) => {
    selectOptions.push({
      label: option.name,
      value: option._id,
    })
  })

  return selectOptions
}

export const compareObjects = <T extends object>(obj1: T, obj2: T) => {
  return JSON.stringify(obj1) === JSON.stringify(obj2)
}

export function isObject<T extends object>(object: T) {
  return typeof object === 'object'
}

export const createInitialState = (attributesList: AttributeType[]) => {
  const filters: any = {}
  attributesList.forEach((attribute) => {
    const { name, type } = attribute
    let initialValue
    switch (type) {
      case 'text':
        initialValue = '' as string
        break
      case 'number':
        initialValue = [0, 0] as [number, number]
        break
      case 'select':
        initialValue = undefined as number | undefined
        break
      case 'multiselect':
        initialValue = [] as number[]
        break
    }
    filters[name] = initialValue
  })

  return filters as FiltersType
}

export const createFormState = (filters: FiltersType) => {
  const formFilters: any = {}
  attributesList.forEach((attribute) => {
    const { name, type } = attribute
    let initialValue
    switch (type) {
      case 'text':
        initialValue = filters[name] as string
        break
      case 'number':
        const value = filters[name] as [number, number]
        initialValue = {
          from: `${value[0]}`,
          to: `${value[1]}`,
        } as NumberRangeType
        break
      case 'select':
        if (!filters[name]) initialValue = undefined
        else {
          const label = attribute.options?.find(
            (option) => option._id === filters[name]
          )?.name
          initialValue = { label, value: filters[name] } as optionsType<number>
        }
        break
      case 'multiselect':
        const values: optionsType<number>[] = []
        const labels: string[] = []
        const labelsIds = filters[name] as number[]
        labelsIds.forEach((id) => {
          const label = attribute.options!.find(
            (option) => option._id === id
          )!.name
          labels.push(label)
        })
        labels.forEach((label, index) =>
          values.push({ label, value: labelsIds[index] })
        )
        initialValue = [] as optionsType<number>[]
        break
    }
    formFilters[name] = initialValue
  })

  return formFilters as FiltersFormType
}

export const createFiltersState = (formFilters: FiltersFormType) => {
  const filters: any = {}
  attributesList.forEach((attribute) => {
    const { name, type } = attribute
    let value
    switch (type) {
      case 'text':
        value = formFilters[name] as string
        break
      case 'number':
        const formValue = formFilters[name] as NumberRangeType
        value = [+formValue.from, +formValue.to]
        break
      case 'select':
        if (!formFilters[name]) value = undefined
        else {
          const formSelectValue = formFilters[name] as optionsType<number>
          value = formSelectValue.value
        }
        break
      case 'multiselect':
        const formMultiselectValues = formFilters[name] as optionsType<number>[]
        value = formMultiselectValues.map((formValue) => formValue.value)
        break
    }
    filters[name] = value
  })

  return filters as FiltersType
}
