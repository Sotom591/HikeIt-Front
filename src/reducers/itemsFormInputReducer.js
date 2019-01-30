
const itemsFormInputReducer = (state = {itemsFormInput: ''}, action) => {
  switch(action.type){
    case 'CHANGE_ITEM_INPUT':
      return {
        itemsFormInput: action.value
      }
    default:
      return state
  }
};

export default itemsFormInputReducer;
