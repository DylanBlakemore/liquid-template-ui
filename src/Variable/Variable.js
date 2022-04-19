import React from 'react'

import Icon from '../Icon'

import './Variable.scss'

export default function Variable({ onDelete, label, path, dataType }) {
  return <span className={ 'Variable' } style={{ userSelect: 'none' }} contentEditable={ false }>
    <span style={{ verticalAlign: 'middle', paddingRight: '3px' }}><Icon type={ dataType } /></span>
    <span style={{ color: '#55c0df' }}>| </span>
    { label }
    <span className={ 'Variable__Button' }>
      <Icon
        className={ 'Variable__Icon' }
        type={ 'close' }
        onClick={ () => onDelete(path) }
      />
    </span>
  </span>
}
