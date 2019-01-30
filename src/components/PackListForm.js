import React from 'react'
import { connect } from 'react-redux'
import { changeListInput } from '../actions'

const PackListForm = (props) => {
    return(
      <form className='pack-form' onSubmit={props.onListFormSubmit}>
          <input className='pack-input' type='text' value={props.lists.listFormInput} onChange={(e) => {
            props.dispatch(changeListInput(e.target.value))
          }}/>
          <button className='ui secondary button' type='submit'>Submit</button>
      </form>
    )
  }

const mapStateToProps = (state) => {
  return {
    lists: state.lists
  }
}


export default connect(mapStateToProps)(PackListForm)
