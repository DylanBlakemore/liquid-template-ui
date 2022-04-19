import React from 'react'

import { Menu } from 'react-contexify'

import { MenuEntry } from './MenuEntry'

import './EditorMenu.scss'

export default function EditorMenu({ id, items, handleSelect, context }) {
  return <Menu id={ id } className={ 'menu' }>
    {
      items && Object.entries(items).map(([_, item]) => {
        return <MenuEntry
          { ...item }
          key={ item.index }
          handleSelect={ handleSelect }
          context={ context }
        />
      }) 
    }
  </Menu>
}
