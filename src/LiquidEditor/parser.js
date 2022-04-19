export const parseState = (state) => {
  if (state.type === 'paragraph') {
    return state.children.map((child) => {
      return parseState(child)
    }).join('')
  } else if (state.type === 'variable') {
    return state.value
  } else if (state.type === 'iteration') {
    const header = state.value
    const footer = '{% endfor %}'
    const content = state.children.map((child) => {
      return parseState(child)
    }).join('')
    return `\n${header}\n${content}\n${footer}`
  } else {
    return state.text
  }
} // Needs a lot of work
