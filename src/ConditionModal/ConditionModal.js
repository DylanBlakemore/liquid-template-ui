import React from 'react'

import Modal from 'react-modal'

export default function ConditionModal({ isOpen, onClose }) {
  return <Modal
    isOpen={isOpen}
    // onAfterOpen={afterOpenModal}
    onRequestClose={onClose}
    // style={customStyles}
    contentLabel={ 'Create condition' }
  >
    <button>Click me!</button>
  </Modal>
}
