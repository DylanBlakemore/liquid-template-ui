import React, { useState } from 'react'

import CloseIcon from '@mui/icons-material/Close'

import { styles } from '../EditorPanel//styles'

const buttonStyle = ({ isHovering }) => {
  return {
    cursor: 'pointer',
    padding: '0px 0px 0px 5px',
    borderRadius: '4px',
    fontWeight: isHovering ? 'bold' : 'normal',
    veticalAlign: 'middle',
  }
}

export default function Variable({ onDelete, text, id, ...props }) {

  const [hovering, setHovering] = useState(false)

  const handleDelete = () => onDelete(id)

  const startHover = () => setHovering(true)
  const stopHover = () => setHovering(false)

  return <span style={ styles.variable }>
    <span contentEditable={ false}>{ text }</span>
    <span
      style={ buttonStyle({ isHovering: hovering }) }
      onMouseEnter={startHover}
      onMouseLeave={stopHover}
      onClick={ handleDelete }
      contentEditable={ false}
    >
      <CloseIcon size={ 'small'} style={{ fontSize: '12' }}/>
    </span>
  </span>
}
