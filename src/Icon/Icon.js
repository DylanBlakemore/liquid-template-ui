import React from 'react'
import { BsX } from 'react-icons/bs'
import { BsArrowRepeat } from 'react-icons/bs'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { BiData } from 'react-icons/bi'
import { BsFonts } from 'react-icons/bs'
import { TiSortNumerically } from 'react-icons/ti'
import { BiQuestionMark } from 'react-icons/bi'

export default function Icon({ type, ...props }) {
  switch(type) {
    case 'close':
      return <BsX {...props}/>
    case 'context-menu':
      return <BsThreeDotsVertical {...props}/>
    case 'iteration':
      return <BsArrowRepeat {...props}/>
    case 'variable':
      return <BiData {...props}/>
    case 'text':
      return <BsFonts {...props}/>
    case 'number':
      return <TiSortNumerically {...props}/>
    case 'question':
      return <BiQuestionMark {...props}/>
    default:
      return <></>
  }
}
