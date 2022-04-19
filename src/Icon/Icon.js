import React from 'react'
import { BsX } from 'react-icons/bs'
import { BsArrowRepeat } from 'react-icons/bs'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { BiData } from 'react-icons/bi'
import { BsFonts } from 'react-icons/bs'
import { TiSortNumerically } from 'react-icons/ti'

const getIcon = (icon, props) => {
  switch(icon) {
    case 'close':
      return <BsX {...props} />
    case 'context-menu':
      return <BsThreeDotsVertical {...props} />
    case 'rotate':
      return <BsArrowRepeat {...props}/>
    case 'variable':
      return <BiData {...props}/>
    case 'text':
      return <BsFonts {...props}/>
    case 'number':
      return <TiSortNumerically {...props}/>
    default:
      return <></>
  }
}

export default function Icon({ type, ...props }) {
  return getIcon(type, props)
}
