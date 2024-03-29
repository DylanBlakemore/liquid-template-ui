import { nanoid } from 'nanoid'

import { iterationWrapper, contextWrapper, variableWrapper, conditionWrapper } from '../LiquidUtils/wrappers'

import { Transforms } from 'slate'

const insertCondition = (editor, data, id) => {
  editor.insertNode({
    type: 'condition',
    value: conditionWrapper(data.query),
    label: data.string,
    children: [{text: ''}],
    id: id
  })
  Transforms.move(editor, { distance: 1, unit: 'character' })
}

const insertVariable = (editor, data, id) => {
  editor.insertNode({
    type: 'variable',
    value: variableWrapper(data.index),
    label: data.displayLabel,
    index: data.index,
    children: [{text: ' '}],
    dataType: data.type,
    id: id
  })
  Transforms.move(editor, { distance: 1, unit: 'character' })
}

const insertIteration = (editor, data, id) => {
  const context = data.context ? [...data.context, contextWrapper(data.index)] : [contextWrapper(data.index)]
  Transforms.insertNodes(editor, [
    {
      type: 'iteration',
      value: iterationWrapper(data.index),
      index: data.index,
      label: `For each ${data.label}`,
      children: [{
        id: id,
        type: 'paragraph',
        children: [{text: ' '}],
        context: context
      }],
      id: `${id}-iteration-container`
    },
    {
      type: 'paragraph',
      id: nanoid(),
      context: data.context,
      children: [
        { text: '' }
      ]
    }
  ])
  Transforms.move(editor, { distance: 1, unit: 'character', reverse: true })
}

export const insertElement = (editor, data, id) => {
  if (data.type === 'number' || data.type === 'text') {
    insertVariable(editor, data, id)
  } else if (data.type === 'iteration') {
    insertIteration(editor, data, id)
  } else if (data.type === 'condition') {
    insertCondition(editor, data, id)
  }
}
