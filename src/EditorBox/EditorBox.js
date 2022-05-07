import React, { useState, useCallback } from 'react'

import { createEditor } from 'slate'
import { Slate, Editable, withReact } from 'slate-react'
import { withHistory } from 'slate-history'

import pipe from 'lodash/fp/pipe'

import EditorElement from '../EditorElement'
import ContainerHeader from '../ContainerHeader'
import { useSelectedContainer, selectElement } from '../state'

import './EditorBox.scss'

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

const withConditions = editor => {
  const isInline = editor.isInline

  editor.isInline = element => {
    return element.type === 'condition' ? true : isInline(element)
  }

  return editor
}

const createEditorWithPlugins = pipe(
  withConditions,
  withVariables,
  withHistory,
  withReact
)

export default function EditorBox({ data, onEditorChange }) {
  const [editor] = useState(() => createEditorWithPlugins(createEditor()))
  const [editorState, setEditorState] = useState(data)

  const isParentOfSelected = useSelectedContainer([])

  const handleChange = useCallback((value) => {
    setEditorState(value)
    onEditorChange(value)
    selectElement(editor.selection.focus.path)
  }, [])

  return <div className={ 'Editor__Container' }>
    <ContainerHeader label={ 'Liquid template creator' } isActive={ isParentOfSelected }/>
    <Slate
      editor={ editor }
      value={ editorState }
      onChange={ handleChange }
    >
      <Editable
        renderElement={ (props) => <EditorElement { ...props } editor={ editor } /> }
        style={{ backgroundColor: '#ffffff', padding: '10px' }}
      />
    </Slate>
  </div>
}
