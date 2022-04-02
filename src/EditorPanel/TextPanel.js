import React, { useState, useCallback } from 'react'

import { createEditor } from 'slate'
import { Slate, Editable, withReact } from 'slate-react'

import Variable from '../Variable'
import Character from '../Character'
import { styles } from './styles'

import { useNode } from '../LiquidEditor/liquidState'

const DefaultElement = props => {
  return <span {...props.attributes} >{props.children}</span>
}

const VariableElement = props => {
  return <Variable
    text={ props.children }
  />
}

export function TextPanel({ children, idx }) {
  const [editor] = useState(() => withReact(createEditor()), [])
  const [value, setValue] = useState(useNode(idx).children)

  const updateValue = (newValue) => {
    setValue(newValue)
  }

  const renderElement = useCallback(props => {
    switch (props.element.type) {
      case 'variable':
        return <VariableElement {...props}/>
      case 'loop':
        return null
      default:
        return <DefaultElement {...props}/>
    }
  }, [])

  return <Slate
    editor={ editor }
    value={ value }
    onChange={ updateValue }
  >
    <Editable renderElement={renderElement} style={ {padding: '10px 0px 10px 0px'} } />
  </Slate>
}
