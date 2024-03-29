const instanceWrapper = (index) => {
  return `${index.split('.').join('_')}_instance`
}

export const iterationWrapper = (index) => {
  return `{% for ${instanceWrapper(index)} in ${index} %}`
}

export const variableWrapper = (index) => {
  return `{{ ${index} }}`
}

export const contextWrapper = (index) => {
  return { key: index, index: instanceWrapper(index) }
}

export const conditionWrapper = (logic) => {
  const condition = logic.replace('&&', 'and').replace('||', 'or').replace('(', '').replace(')', '')
  return `{% if ${condition} %}`
}
