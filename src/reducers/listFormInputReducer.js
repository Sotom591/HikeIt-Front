
const listFormInputReducer = (state = {listFormInput: ''}, action) => {
  switch(action.type){
    case 'CHANGE_LIST_INPUT':
      return {
        listFormInput: action.value
      }
    default:
      return state
  }
};

export default listFormInputReducer;
