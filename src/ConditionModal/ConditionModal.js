import React from 'react'

import ReactModal from 'react-modal'
import ContainerHeader from '../ContainerHeader'
import { ConditionBuilder } from './ConditionBuilder'

import './ConditionModal.scss'

export default function ConditionModal({ isOpen, onClose, onConfirm }) {
  return <ReactModal
    isOpen={isOpen}
    onRequestClose={onClose}
    appElement={ document.getElementById('root') }
    className={ 'condition-modal' }
    centered={ true }
  >
    <ContainerHeader label={ 'Create condition' } icon={ 'question' }/>
  </ReactModal>
}
