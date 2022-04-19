import { useContextMenu } from 'react-contexify'

export const useEditorMenu = (element) => {
  const { show } = useContextMenu({ id: `${element.id}-context-menu`, })

  const handleContextMenu = (event) => {
    event.preventDefault()
    show(event, {
      props: {
          key: 'value'
      }
    })
  }

  return handleContextMenu
}
