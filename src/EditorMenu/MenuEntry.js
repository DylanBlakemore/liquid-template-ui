import React from 'react'

import Icon from '../Icon'
import { Item, Submenu } from 'react-contexify'
import './EditorMenu.scss'

const buildKey = (index, parentIndex) => parentIndex ? `${parentIndex}.${index}` : index
const buildDisplayLabel = (label, parentLabel) => parentLabel ? `${parentLabel} > ${label}` : label

const MenuItem = ({ item, menuKey, handleSelect }) => {
  const handleClick = ({ data, event }) => {
    event.preventDefault()
    handleSelect(data)
  }

  return <Item
    key={ menuKey }
    data={ { ...item, index: menuKey } }
    onClick={ handleClick }
  >
    <Icon type={ item.type }/>
    { item.label }
  </Item>
}

const insertGroup = (item, key, handleSelect, context) => {
  return <Submenu
    key={ key }
    label={ item.label }
  >
    { 
      item.items && Object.entries(item.items).map(([k, childItem]) => {
        return <MenuEntry
          key={ buildKey(childItem.index, key) }
          { ...childItem }
          displayLabel = { buildDisplayLabel(childItem.label, item.displayLabel) }
          parentDisplayLabel={ item.displayLabel }
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
  if (itemContext) return { ...item, index: itemContext.index, type: 'group' }
}

export function MenuEntry({ index, parentDisplayLabel, parentIndex, handleSelect, context, ...data }) {
  const { type } = data
  const key = buildKey(index, parentIndex)

  const displayLabel = buildDisplayLabel(data.label, parentDisplayLabel)
  const item = { ...data, displayLabel: displayLabel }

  switch (type) {
    case 'text':
      return <MenuItem item={ item } menuKey={ key } handleSelect={ handleSelect } />
    case 'number':
      return <MenuItem item={ item } menuKey={ key } handleSelect={ handleSelect } />
    case 'iteration':
      const contextualItem = getContextualItem(item, context, key)
      if (contextualItem) {
        return insertGroup(contextualItem, contextualItem.index, handleSelect, context)
      } else {
        return <MenuItem item= { { ...item, data_type: 'rotate' } } menuKey={ key } handleSelect={ handleSelect } />
      }
    default:
      return insertGroup(item, key, handleSelect, context)
  }
}