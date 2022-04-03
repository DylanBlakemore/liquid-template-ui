export const parseState = (state) => {
  const valueArray = state.map((child) => {
    if (child.value) {
      return child.value
    } else if (child.text) {
      return child.text
    } else if (child.children) {
      return parseState(child.children)
    } else {
      return null
    }
  })
  return valueArray.join('')
} // Needs a lot of work
