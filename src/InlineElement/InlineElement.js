import React from 'react'

import Icon from '../Icon'

import './InlineElement.scss'

export default function InlineElement({ icon, onDelete, path, children, palette, label }) {
  const renderChildren = () => <>
    { children }
    <span style={{ borderLeft: 'solid 1px #55c0df' }}></span>
  </>

  return <span className={ 'inline-element' }>
    <span className={ 'inline-element-icon' }><Icon type={ icon } /></span>
    <span className={ 'inline-element-title' } style={{ userSelect: 'none' }} contentEditable={ false }>
      { label }
    </span>
    { children && renderChildren() }
    <Icon
      className={ 'inline-element-close-button' }
      type={ 'close' }
      onClick={ () => onDelete(path) }
    />
  </span>
}
