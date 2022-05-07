import { useContextMenu } from 'react-contexify'

export const useEditorMenu = ({ id }) => {
  const { show } = useContextMenu({ id: `${id}-context-menu` })

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
