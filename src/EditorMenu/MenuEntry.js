import React from 'react'

import Icon from '../Icon'
import { Item, Submenu } from 'react-contexify'
import './EditorMenu.scss'

const MenuItem = ({ item, handleSelect, context }) => {
  const handleClick = ({ data, event }) => {
    event.preventDefault()
    handleSelect(data)
  }

  return <Item
    key={ item.index }
    data={ { ...item, context: context } }
    onClick={ handleClick }
  >
    <Icon type={ item.type }/>
    { item.label }
  </Item>
}

const SubMenu = ({ item, handleSelect, context }) => {
  return <Submenu
    key={ item.index }
    label={ item.label }
  >
    { 
      item.items && item.items.map((childItem) => {
        return <MenuEntry
          key={ childItem.index }
          item={ childItem }
          handleSelect={ handleSelect }
          context={ context }
        />
      })
    }
  </Submenu>
}

export function MenuEntry({ handleSelect, context, item }) {
  switch (item.type) {
    case 'text':
      return <MenuItem item={ item } handleSelect={ handleSelect } context={ context }/>
    case 'number':
      return <MenuItem item={ item } handleSelect={ handleSelect } context={ context }/>
    case 'iteration':
      return <MenuItem item={ item } handleSelect={ handleSelect } context={ context }/>
    default:
      return <SubMenu item={ item } handleSelect={ handleSelect } context={ context } />
  }
}
