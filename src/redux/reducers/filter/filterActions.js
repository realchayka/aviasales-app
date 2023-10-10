export const toggleAll = () => ({
  type: 'TOGGLE_ALL',
})

export const toggleCheckbox = (checkboxName) => ({
  type: 'TOGGLE_CHECKBOX',
  payload: checkboxName,
})
