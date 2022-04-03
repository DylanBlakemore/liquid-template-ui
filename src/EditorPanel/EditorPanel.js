import React from 'react'

import { TextPanel } from './TextPanel'
import { LoopPanel } from './LoopPanel'
import { chunkTypes } from '../LiquidEditor/constants'

import { styles } from './styles.js'

export default function EditorPanel({ children, unstyled=false, idx }) {
  const editorStyles = unstyled ? {} : styles.editorPanel
  // return <TextPanel
  //   children={ children }
  // />
  return <div style={ { ...editorStyles, padding: '0px 10px 0px 10px' } } >
    {
      children.map((chunk, index) => {
        const newIndex = idx === undefined ? `${index}` : `${idx}.${index}`
        if (chunk.type === chunkTypes.TEXT || chunk.type === 'iteration') {
          return <TextPanel children={ chunk.children } idx={ newIndex } key={ `text-panel-${newIndex}` } />
        } else if (chunk.type === chunkTypes.LOOP) {
          return <LoopPanel children={ chunk.children } title={ chunk.title } idx={ newIndex } key={ `loop-panel-${newIndex}` }/>
        } else {
          return null
        }
      })
    }
  </div>
}
