import React, { useState } from 'react'

// import { Utils as QbUtils } from 'react-awesome-query-builder'

import ReactModal from 'react-modal'
import ContainerHeader from '../ContainerHeader'
import { ConditionBuilder } from './ConditionBuilder'
import Button from '../Button'

import './ConditionModal.scss'

export default function ConditionModal({ isOpen, onClose, onConfirm, context }) {
  const [ruleData, setRule] = useState(null)

  const onRuleEdit = ({ string, logic, query }) => {
    setRule({ string: string, logic: logic, query: query })
  }

  const onSave = (event) => onConfirm({ event: event, data: ruleData })

  return <ReactModal
    isOpen={isOpen}
    onRequestClose={onClose}
    appElement={ document.getElementById('root') }
    className={ 'condition-modal' }
    centered={ true }
  >
    <ContainerHeader label={ 'Create condition' } icon={ 'question' }/>
    <ConditionBuilder context={ context } onEdit={ onRuleEdit }/>
    <div>
      <Button variant={ 'primary' } onClick={ onSave }>Add</Button>
      <Button variant={ 'outline-secondary' } onClick={ onClose }>Cancel</Button>
    </div>
  </ReactModal>
}
