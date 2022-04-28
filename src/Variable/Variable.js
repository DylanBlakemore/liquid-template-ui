import React from 'react'
import InlineElement from '../InlineElement'

export default function Variable({ onDelete, label, path, dataType }) {
  return <InlineElement
    icon={ dataType }
    onDelete={ onDelete }
    path={ path }
    label={ label }
  />
}
