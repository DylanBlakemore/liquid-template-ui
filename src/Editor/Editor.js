import React, { useState, useCallback } from 'react'

import { Editor as SlateEditor, Range, createEditor } from 'slate'
import { Slate, Editable, withReact } from 'slate-react'
import { withHistory } from 'slate-history'

import pipe from 'lodash/fp/pipe'

import Element from '../Element'
import ContextMenu from '../ContextMenu'
import { objectTypes } from '../utils/objectTypes'

import styles from '../styles.scss'

const withVariables = editor => {
  const { isInline, isVoid } = editor

  editor.isInline = element => {
    return element.type === 'variable' ? true : isInline(element)
  }

  editor.isVoid = element => {
    return element.type === 'variable' ? true : isVoid(element)
  }

  return editor
}

const createEditorWithPlugins = pipe(
  withVariables,
  withHistory,
  withReact
)

export default function Editor({ context, onChange, value }) {
  const [editor] = useState(() => createEditorWithPlugins(createEditor()))
  const [editorState, setEditorState] = useState(value)
  const [contextMenuState, setContextMenuState] = useState({ isVisible: false })

  const handleChange = useCallback((value) => {
    setEditorState(value)
    onChange(value)

    const { selection } = editor

    if (selection && Range.isCollapsed(selection)) {
      const [start] = Range.edges(selection)
      const wordBefore = SlateEditor.before(editor, start, { unit: 'word' })
      const before = wordBefore && SlateEditor.before(editor, wordBefore)
      const beforeRange = before && SlateEditor.range(editor, before, start)
      const beforeText = beforeRange && SlateEditor.string(editor, beforeRange)
      const beforeMatch = beforeText && beforeText.match(/^@(\w*)$/)
      const after = SlateEditor.after(editor, start)
      const afterRange = SlateEditor.range(editor, start, after)
      const afterText = SlateEditor.string(editor, afterRange)
      const afterMatch = afterText.match(/^(\s|$)/)

      if (beforeMatch && (afterMatch || afterText === '')) {
        setContextMenuState({ isVisible: true })
        return
      }
    }

    setContextMenuState({ isVisible: false })
  }, [onChange, editor])

  return <div className={ 'editor' }>
    <Slate
      editor={ editor }
      value={ editorState }
      onChange={ handleChange }
    >
      <Editable
        renderElement={ (props) => <Element { ...props } editor={ editor } /> }
        className={ 'editable' }
      />
    </Slate>
    <ContextMenu isVisible={ contextMenuState.isVisible } options={ objectTypes }/>
  </div>
}
