import React from 'react'

import Stack from '@mui/material/Stack'

import { TextPanel } from './TextPanel'
import { LoopPanel } from './LoopPanel'
import { chunkTypes } from '../LiquidEditor/constants'

import { styles } from './styles.js'

export default function EditorPanel({ children, unstyled=false, idx }) {
  const editorStyles = unstyled ? {} : styles.editorPanel
  return <div style={ { ...editorStyles, padding: '0px 10px 0px 10px' } } >
    {
      children.map((chunk, index) => {
        const newIndex = idx === undefined ? `${index}` : `${idx}.${index}`
        if (chunk.type === chunkTypes.TEXT) {
          return <TextPanel children={ chunk.children } idx={ newIndex } />
        } else if (chunk.type === chunkTypes.LOOP) {
          return <LoopPanel children={ chunk.children } title={ chunk.title } idx={ newIndex }/>
        } else {
          return null
        }
      })
    }
  </div>
}
