import React from 'react'

import InlineElement from '../InlineElement'

import './Condition.scss'

export default function Condition ({ onDelete, label, path, children }) {
  return <InlineElement
    icon={ 'question' }
    onDelete={ onDelete }
    path={ path }
    label={  label }
  >
    <span style={{ backgroundColor: 'white', color: 'black', padding: '2px 5px 2px 5px' }}>
      { children }
    </span>
  </InlineElement>
}
