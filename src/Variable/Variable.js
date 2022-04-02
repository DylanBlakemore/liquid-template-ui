import React, { useState } from 'react'

import { styles } from '../EditorPanel//styles'

import { deleteNode } from '../LiquidEditor/liquidState'

const buttonStyle = ({ isHovering }) => {
  return {
    cursor: 'pointer',
    padding: '0px 5px 0px 5px',
    borderRadius: '4px',
    fontWeight: isHovering ? 'bold' : 'normal'
  }
}

export default function Variable({ value, text, idx }) {

  const [hovering, setHovering] = useState(false)

  const onDelete = () => deleteNode(idx)

  const startHover = () => setHovering(true)
  const stopHover = () => setHovering(false)

  return <span style={ styles.variable }>
    <span contentEditable={ false}>{ text }</span>
    <span
      style={ buttonStyle({ isHovering: hovering }) }
      onMouseEnter={startHover}
      onMouseLeave={stopHover}
      onClick={ onDelete }
      contentEditable={ false}
    >
      x
    </span>
  </span>
}
