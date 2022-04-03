import { createStore } from '@halka/state'
import produce from 'immer'
import get from 'lodash/get'

import { mockChunkedData } from './mock'

const baseState = mockChunkedData

export const useTree = createStore(baseState)
export const useCursor = createStore()

export const setCursor = (position) => useCursor.set(position)

const setState = (fn) => useTree.set(produce(fn))

export const getNode = (state, id) => get(state, id.split('.').join('.children.'))

export const updateNode = (id) => (newChildren) => {
  const getter = id.split('.').join('.children.')
  setState((state) => {
    let parent = get(state, getter)
    parent.children = newChildren
  })
}

export const insertNode = (panelId, cursorPosition, value) => {
  
}

export const deleteNode = (panelId) => {
  const idList = panelId.split('.')
  const parents = idList.slice(0, idList.length - 1)
  const lastElement = idList[idList.length -1]
  const getter = parents.join('.children.')

  setState((state) => {
    if (getter) {
      let parent = get(state, getter)
      parent.children.splice(lastElement, 1)
    } else {
      state.splice(lastElement, 1)
    }
  })
}




