import React from 'react'

import Editor from '../Editor'

export const defaultValue = [{
  type: 'paragraph',
  children: [
    { text: '' }
  ]
}]

export default function LiquidView({ context, value }) {
  return <>
    <Editor context={ context } onChange={ () => {} } value={ value ?? defaultValue } />
  </>
}
