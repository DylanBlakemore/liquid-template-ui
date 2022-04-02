import React from 'react'

import { useKeypress } from '../hooks/useKeypress'
import { deleteNode, setCursor, useCursor } from '../LiquidEditor/liquidState'

import './Character.css'

export default function Character({ value, idx }) {
  const cursorPosition = useCursor()
  const isSelected = cursorPosition === idx
  useKeypress('Backspace', () => isSelected && deleteNode(idx))

  return <span
    onClick={ () => setCursor(idx) }
    style={{
      whiteSpace: 'pre-wrap',
      overflow: 'hidden'
    }}
  >
    <span>{value}</span>
    <span className='cursor' style={{ position: 'absolute', marginLeft: '-2px' }}>{isSelected ? '|' : null}</span>
  </span>
}
