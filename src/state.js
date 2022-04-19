import { createStore } from '@halka/state'
import produce from 'immer'
import { Path } from 'slate'

const baseState = {
  selectedElement: null,
  globalVariables: {},
  elementVariables: {}
}

export const useLiquidEditor = createStore(baseState)

const setState = (fn) => useLiquidEditor.set(produce(fn))

export const setVariables = (variables, element = null) => setState((state) => {
  if (element) {
    state.elementVariables[element.id] = { [variables.index]: variables }
  } else {
    state.globalVariables = variables
  }
})

export const useVariables = (element = null) => {
  const globalVariables = useLiquidEditor((state) => state.globalVariables)
  const elementVariables = useLiquidEditor((state) => state.elementVariables[element?.id])
  
  if (!elementVariables) {
    return globalVariables
  } else {
    return { ...globalVariables, ...elementVariables }
  }
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
