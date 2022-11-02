import React from 'react'
import { useSlateStatic, ReactEditor } from 'slate-react'

import TextElement from './TextElement'

export default function Element({ element, children }) {
  const editor = useSlateStatic()
  const path = ReactEditor.findPath(editor, element)

  const renderElement = () => {
    switch (element.type) {
      default:
        return <TextElement path={ path }>
          { children }
        </TextElement>
    }
  }

  return renderElement()

}
