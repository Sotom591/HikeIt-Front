const CHANGE_ITEM_INPUT = 'CHANGE_ITEM_INPUT'
const CHANGE_LIST_INPUT = 'CHANGE_LIST_INPUT'

export const changeItemInput = (value) => ({
  type: CHANGE_ITEM_INPUT,
  value: value
})

export const changeListInput = (value) => ({
  type: CHANGE_LIST_INPUT,
  value: value
})
