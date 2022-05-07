import React, { useState, useEffect } from 'react'

import EditorBox from '../EditorBox'

import { parseState } from './parser'

import { mockVariables, dummyData } from './mock'
import { setVariables } from '../state'

import { Liquid } from 'liquidjs'

export default function LiquidEditor() {
  const [data, setData] = useState([{
    type: 'paragraph',
    children: [
      { text: '' }
    ]
  }])

  const [dummyResult, setDummyResult] = useState('')

  useEffect(() => setVariables(mockVariables), [])

  const engine = new Liquid()
  const template = data.map(entry => parseState(entry)).join('')
  const tpl = engine.parse(template)
  engine.render(tpl, dummyData).then(setDummyResult)

  return <div style={{ padding: '30px', backgroundColor: '#f5f5f5'}}>
    <EditorBox
      data={ data }
      onEditorChange={ setData }
    />
    <div><textarea value={ template } readOnly={ true }/></div>
    <div><textarea value={ dummyResult } readOnly={ true }/></div>
    <div dangerouslySetInnerHTML={{ __html: dummyResult }} />

  </div>
}
