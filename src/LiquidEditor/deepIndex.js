export const deepIndex = (data) => {
  if (!data) return {}

  let indexedData = {}
  data.forEach((item) => {
    indexedData[item.index] = {
      ...item,
      items: deepIndex(item.items)
    }
  })
  return indexedData
}
