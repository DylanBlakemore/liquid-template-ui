import React from 'react'

import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close'

import ChangeCircleOutlinedIcon from '@mui/icons-material/ChangeCircleOutlined'

import { styles } from './styles'

const getIcon = (icon) => {
  switch(icon) {
    case 'loop': return <ChangeCircleOutlinedIcon fontSize={ 'small' } style={{ padding: '0px 5px 0px 0px' }} />
    default: return null
  }
}

export function PanelHeader({ title, handleDelete, icon=null }) {
  return <div style={ { ...styles.panelHeader } }>
    <div style={ styles.panelHeader.title }>{ getIcon(icon) }{ title }</div>
    <IconButton style={ styles.panelHeader.deleteButton } onClick={ handleDelete }>
      <CloseIcon fontSize={ 'small' }/>
    </IconButton>
  </div>
}
