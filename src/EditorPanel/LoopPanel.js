import React from 'react'

import EditorPanel from './EditorPanel'
import { PanelHeader } from './PanelHeader'

import { deleteNode } from '../LiquidEditor/liquidState'

import { styles } from './styles'

export function LoopPanel({ children, title, id }) {

  const onDelete = () => deleteNode(id)

  return <div style={ styles.editorPanel } >
    <PanelHeader title={ `${title}` } icon={ 'loop' } handleDelete={ onDelete } />
    <EditorPanel children={ children } id={ id } unstyled/>
  </div>
}
