import React, { useState, useCallback } from 'react'

import { createEditor, Transforms } from 'slate'
import { Slate, Editable, withReact } from 'slate-react'

import pipe from 'lodash/fp/pipe'

import Variable from '../Variable'
import { LoopPanel } from '../EditorPanel/LoopPanel'
import EditorPanel from './EditorPanel'
import { PanelHeader } from './PanelHeader'
import { styles } from './styles'

import { updateNode } from '../LiquidEditor/liquidState'

const DefaultElement = props => {
  return <span {...props.attributes}>{props.children}</span>
}

const VariableElement = props => {
  return <Variable
    id={ props.element.id }
    text={ props.children }
    onDelete={ props.onDelete }
  />
}

const LoopElement = props => {
  return <></>
  // return <div style={ styles.editorPanel } >
  //   <PanelHeader title={ `${props.element.title}` } icon={ 'loop' } handleDelete={ () => {} } />
  //   <EditorPanel children={ children } id={ id } unstyled/>
  // </div>
}

const createEditorWithPlugins = pipe(
  withReact
)

export function TextPanel({ children, idx }) {
  const [editor] = useState(() => createEditorWithPlugins(createEditor()), [])
  const [editorState, setEditorState] = useState(children)
  const setGlobalValue = updateNode(idx)

  const handleChange = useCallback((value) => {
    setGlobalValue(value)
    setEditorState(value)
  }, [setGlobalValue])

  const onDeleteVariable = (id) => {
    let index = editor.children.findIndex((child) => child?.id === id)
    Transforms.removeNodes(editor, { at: [index] })
  }

  const renderElement = props => {
    switch (props.element.type) {
      case 'variable':
        return <VariableElement {...props} onDelete={ onDeleteVariable }/>
      case 'iteration':
        return <LoopElement {...props} />
      default:
        return <DefaultElement {...props}/>
    }
  }

  return <Slate
    editor={ editor }
    value={ editorState }
    onChange={ handleChange }
  >
    <Editable
      renderElement={renderElement}
      style={ {padding: '10px 0px 10px 0px'} }
      placeholder={ 'Continue typing...' }
    />
  </Slate>
}
