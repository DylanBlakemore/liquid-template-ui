import React from 'react'

import Stack from '@mui/material/Stack'

import EditorPanel from './EditorPanel'
import { PanelHeader } from './PanelHeader'

import { deleteNode } from '../LiquidEditor/liquidState'

import { styles } from './styles'

export function LoopPanel({ children, title, idx }) {

  const onDelete = () => deleteNode(idx)

  return <div style={ styles.editorPanel } >
    <PanelHeader title={ `${title}` } icon={ 'loop' } handleDelete={ onDelete } />
    <EditorPanel children={ children } idx={ idx } unstyled/>
  </div>
}
