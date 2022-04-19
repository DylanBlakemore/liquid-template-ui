import React from 'react'

import Icon from '../Icon'

import './ContainerHeader.scss'

export default function ContainerHeader({ label, isActive, icon, onClose }) {
  return <div className={ 'Header' } contentEditable={ false } style={{ userSelect: 'none' }}>
    <span className={ 'Header__Icon' }><Icon type={ icon }/></span>
    <span className={ 'Header__Label' }>{ label }</span>
    <span className={ 'Header__Button' }>
      { onClose && <Icon type={ 'close' } onClick={ onClose }/> }
    </span>
  </div>
}
