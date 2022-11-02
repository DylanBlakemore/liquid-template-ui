import React from 'react'
import ReactDOM from 'react-dom'

import styles from '../styles.scss'

export default function ContextMenu({ options, isVisible, left, top, bottom }) {
  const style = {
    left: `${left}px`,
    top: `${top}px`,
  }

  const menuComponent = isVisible && <div
    className={ `context-menu ${isVisible ? 'context-menu-visible' : ''}` }
    style={ style }
  >
    <div className={ 'list' }>
      { 
        options.map((option) => <button
          className={ 'button' }
          key={ `context-menu-button-${option.value}` }
        >
          { option.text }
        </button>)
      }
    </div>
  </div>

  return ReactDOM.createPortal(menuComponent, document.body)
}
