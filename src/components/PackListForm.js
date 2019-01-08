import React from 'react'
import { connect } from 'react-redux'
import { changeFormInput } from '../actions'

const PackListForm = (props) => {
    return(
      <form className='pack-form' onSubmit={props.onFormSubmit} id={props.list ? props.list.id : 0}>
          <input className='pack-input' type='text' onChange={(e) => {
            props.changeFormInput(e.target.value)
          }}/>
          <button className='ui secondary button' type='submit' id={props.list ? props.list.id : 0}>Submit</button>
      </form>

    )
  }

const mapStateToProps = (state) => {
  return {
    formInput: state.formInput
  }
}


export default connect(mapStateToProps, {changeFormInput})(PackListForm)
// < br />
