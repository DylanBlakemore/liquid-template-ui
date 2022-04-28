import React from 'react'

import ContainerHeader from '../ContainerHeader'
import { useSelectedContainer } from '../state'

import './Loop.scss'

export default function Loop({ label, children, path, onDelete }) {
  const isParentOfSelected = useSelectedContainer(path)

  return <div className={ 'Loop__Container' }>
    <ContainerHeader label={ label } isActive={ isParentOfSelected } icon={ 'iteration' } onClose={ () => onDelete(path) }/>
    <div className={ 'Loop__Editor__Panel' }>
      { children }
    </div>
  </div>
}
