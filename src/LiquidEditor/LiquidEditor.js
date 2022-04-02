import React from 'react'

import EditorPanel from '../EditorPanel'

import { useTree } from './liquidState'

import { mockChunkedData } from './mock'

export default function LiquidEditor() {
  const data = useTree()
  return <div style={{ padding: '30px', backgroundColor: '#f5f5f5'}}>
    <EditorPanel
      children={ data }
    />
  </div>
}
