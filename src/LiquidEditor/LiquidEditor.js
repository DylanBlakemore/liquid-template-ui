import React, { useState } from 'react'

import EditorBox from '../EditorBox'

import { parseState } from './parser'
import { deepIndex } from './deepIndex'

import { mockVariables, mockState } from './mock'

import { setVariables } from '../state'

export default function LiquidEditor() {
  const [data, setData] = useState([{
    type: 'paragraph',
    children: [
      { text: '' }
    ]
  }])
  // const [data, setData] = useState(mockState)
  setVariables(deepIndex(mockVariables))


  return <div style={{ padding: '30px', backgroundColor: '#f5f5f5'}}>
    <EditorBox
      data={ data }
      onEditorChange={ setData }
    />
    <textarea value={ data.map(entry => parseState(entry)).join('')}/>
  </div>
}
