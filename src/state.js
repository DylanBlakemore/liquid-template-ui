import { createStore } from '@halka/state'
import produce from 'immer'
import { Path } from 'slate'
import { useMemo } from 'react'

const baseState = {
  selectedElement: null,
  variables: []
}

export const useLiquidEditor = createStore(baseState)

const setState = (fn) => useLiquidEditor.set(produce(fn))

export const setVariables = (variables) => setState((state) => {
  state.variables = variables
})

export const useVariables = (context = null) => {
  const variables = useLiquidEditor((state) => state.variables)
  return useMemo(() => format(variables, context), [variables, context])
}

export const useConditionFields = (context = null) => {
  const variables = useVariables(context)
  return useMemo(() => parseFields(variables), [variables])
}

export const selectElement = (path) => {
  setState((state) => {
    state.selectedElement = path
  })
}

export const useSelectedContainer = (path) => {
  const selectedElement = useLiquidEditor((state) => state.selectedElement)
  const isParentOfSelected = selectedElement && Path.equals(path, Path.parent(Path.parent(selectedElement)))
  return isParentOfSelected
}

const fieldTypeMap = {
  group: '!struct',
  number: 'number',
  text: 'text'
}

const getFieldType = (type) => {
  if (type === 'iteration') return null
  return fieldTypeMap[type]
}

const parseFields = (variables) => {
  let fields = {}
  variables.forEach((variable) => {
    const field = parseField(variable)
    if (field !== null) fields[variable.originalIndex] = field
  })
  return fields
}

const parseField = (variable) => {
  const type = getFieldType(variable.type)
  if (type === null) return null
  const field = {
    label: variable.label,
    type: type
  }
  
  if (type === '!struct') {
    field['subfields'] = parseFields(variable.items)
  }

  return field
}

const contextualize = (variable, context) => {
  const itemContext = context?.find(contextEntry => contextEntry.key === variable.index)
  if (!itemContext) return variable
  return { ...variable, index: itemContext.index, type: 'group', originalIndex: itemContext.index }
}

const formatIndex = (index, parentIndex) => {
  if (parentIndex === null || parentIndex === undefined) return index
  return `${parentIndex}.${index}`
}

const formatLabel = (label, parentLabel) => {
  if (parentLabel === null || parentLabel === undefined) return label
  return `${parentLabel}.${label}`
}

const formatSingle = (variable, context, parent) => {
  const formattedVariable = contextualize({
    ...variable,
    originalIndex: variable.index,
    index: formatIndex(variable.index, parent?.index),
    displayLabel: formatLabel(variable.label, parent?.displayLabel)
  }, context)

  return {
    ...formattedVariable,
    items: format(variable?.items, context, formattedVariable)
  }
}

const format = (variables, context, parent = null) => {
  return variables?.map((variable) => formatSingle(variable, context, parent))
}
