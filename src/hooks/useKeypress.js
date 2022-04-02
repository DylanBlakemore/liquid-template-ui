import { useEffect } from 'react'

export function useKeypress(key, action) {
  useEffect(() => {
    function onKeydown(e) {
      if (e.key === key) action()
    }
    window.addEventListener('keydown', onKeydown)
    return () => window.removeEventListener('keydown', onKeydown)
  })
}
