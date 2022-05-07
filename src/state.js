import { createStore } from '@halka/state'
import produce from 'immer'
import { Path } from 'slate'

import { deepIndex } from './LiquidUtils/deepIndex'

const baseState = {
  selectedElement: null,
  variables: []
}

export const useLiquidEditor = createStore(baseState)

const setState = (fn) => useLiquidEditor.set(produce(fn))

export const setVariables = (variables) => setState((state) => {
  state.variables = variables
})


const contextualize = (variables) => {

}

const formatSingle = (variable, parent) => {
  debugger
  return variable
}

const format = (variables, parent = null) => {
  variables.map((variable) => formatSingle(variable, parent))
  return variables
}

export const useVariables = (context = null) => {
  const variables = useLiquidEditor((state) => state.variables)
  return format(variables)
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
