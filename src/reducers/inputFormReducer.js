const CHANGE_FORM_INPUT = 'CHANGE_FORM_INPUT'

const inputFormReducer = (state = {formInput: ''}, action) => {
    console.log(state, action)
  switch(action.type){
    case CHANGE_FORM_INPUT:
      return {
        formInput: action.value
      }
    default:
      return state
  }
};

export default inputFormReducer;
