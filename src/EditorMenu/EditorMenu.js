import React, { useState } from 'react'

import { Menu, Submenu, Item, Separator } from 'react-contexify'

import { MenuEntry } from './MenuEntry'
import ConditionModal from '../ConditionModal'

import './EditorMenu.scss'

export default function EditorMenu({ id, items, handleSelect, context }) {
  const [isConditionModalOpen, setConditionModalOpen] = useState(false)

  const handleAddCondition = ({ data, event }) => {
    setConditionModalOpen(true)
    // event.preventDefault()
    // handleSelect({ type: 'condition' })
  }

  return <>
    <Menu id={ id } className={ 'menu' }>
      <Submenu key={ `${id}-variables` } label={ 'Variables' }>
        {
          items && items.map((item) => {
            return <MenuEntry
              item={ item }
              key={ item.index }
              handleSelect={ handleSelect }
              context={ context }
            />
          })
        }
      </Submenu>
      <Separator />
      <Item key={ `${id}-condition` } onClick={ handleAddCondition }>Condition</Item>
      <Item key={ `${id}-condition-block` }>Condition block</Item>
    </Menu>
    <ConditionModal
      isOpen={ isConditionModalOpen }
      onClose={ () => setConditionModalOpen(false) }
    />
  </>
}
