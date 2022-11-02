import React, { useState } from 'react'

import { createStore } from '@halka/state'
import produce from 'immer'

const baseState = {
  isVisible: false,
  selectedElement: null
}

const useContextMenuState = createStore(baseState)
const setState = (fn) => useContextMenuState.set(produce(fn))

export const selectElement = (path) => {
  setState((state) => {
    state.selectedElement = path
  })
}

export function useContextMenu(trigger, path) {
  return null
}
