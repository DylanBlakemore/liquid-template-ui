import React from 'react'

import { useSlateStatic } from 'slate-react'
import { nanoid } from 'nanoid'

import { insertElement } from './insertElement'
import EditorMenu, { useEditorMenu } from '../EditorMenu'
import { useVariables } from '../state'

export default function Paragraph ({ children, ...element }) {
  const handleContextMenu = useEditorMenu(element)
  const variables = useVariables(element)
  const editor = useSlateStatic()

  const handleInsertElement = (data) => {
    const id = nanoid()
    insertElement(editor, { ...data, context: element.context }, id)
  }

  return <>
    <p
      style={{ backgroundColor: '#ffffff' }}
      onContextMenu={ handleContextMenu }
    >
      { children }
    </p>
    <EditorMenu
      id={ `${element.id}-context-menu` }
      items={ variables }
      handleSelect={ handleInsertElement }
      context={ element.context }
    />
  </>
}
