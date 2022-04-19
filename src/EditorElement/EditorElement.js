import React from 'react'

import Variable from '../Variable'
import Loop from '../Loop'
import Paragraph from '../Paragraph'

import { Transforms } from 'slate'
import { useSlateStatic, ReactEditor } from 'slate-react'

export default function EditorElement({ element, children }) {
  const editor = useSlateStatic()
  const path = ReactEditor.findPath(editor, element)

  const deleteNode = (deletedPath) => {
    Transforms.removeNodes(editor, { at: deletedPath })
  }

  const renderElement = () => {
    switch (element.type) {
      case 'variable':
        return <>
          <Variable
            { ...element }
            path={ path }
            onDelete={ deleteNode }
          />
          { children }
        </> // We need to render children here to prevent some gnarly errors
      case 'iteration':
        return <Loop
          { ...element }
          path={ path }
          onDelete={ deleteNode }
        >
          { children }
        </Loop>
      default:
        return <Paragraph
          { ...element }
        >
          { children }
        </Paragraph>
    }
  }

  return renderElement()
}
