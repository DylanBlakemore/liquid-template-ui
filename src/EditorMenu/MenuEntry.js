import React from 'react'

import Icon from '../Icon'
import { Item, Submenu } from 'react-contexify'
import './EditorMenu.scss'

const buildKey = (index, parentIndex) => parentIndex ? `${parentIndex}.${index}` : index

const insertItem = (item, key, handleClick) => {
  return <Item
    key={ key }
    data={ { ...item, index: key } }
    onClick={ handleClick }
  >
    <Icon type={ item.data_type }/>
    { item.label }
  </Item>
}

const insertGroup = (item, key, handleSelect, context) => {
  return <Submenu
    key={ key }
    label={ item.label }
  >
    { 
      item.items && Object.entries(item.items).map(([k, item]) => {
        return <MenuEntry
          key={ buildKey(item.index, key) }
          { ...item }
          parentIndex={ key }
          handleSelect={ handleSelect }
          context={ context }
        />
      })
    }
  </Submenu>
}

const getContextualItem = (item, context, key) => {
  const itemContext = context?.find(contextEntry => contextEntry.key === key)
  if (itemContext) {
    return { ...item, index: itemContext.index, type: 'group', label: item.singular }
  } else {
    return null
  }
}

export function MenuEntry({ index, parentIndex, handleSelect, propsFromTrigger, triggerEvent, context, ...item }) {
  const { type } = item
  const key = buildKey(index, parentIndex)

  const handleClick = ({ data, event }) => {
    event.preventDefault()
    handleSelect(data)
  }

  const menuItem = () => {
    switch (type) {
      case 'variable':
        return insertItem(item, key, handleClick)
      case 'iteration':
        const contextualItem = getContextualItem(item, context, key)
        if (contextualItem) {
          return insertGroup(contextualItem, contextualItem.index, handleSelect, context)
        } else {
          return insertItem({ ...item, data_type: 'rotate' }, key, handleClick, context)
        }
      default:
        return insertGroup(item, key, handleSelect, context)
    }
  }

  return menuItem()
}
