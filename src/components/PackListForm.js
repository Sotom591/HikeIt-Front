import React from 'react'
import { connect } from 'react-redux'
import { changeListInput } from '../actions'

const PackListForm = (props) => {
    return(
      // <form className='pack-form' onSubmit={props.onFormSubmit} id={props.list ? props.list.id : 0}>
      //     <input className='pack-input' type='text' onChange={(e) => {
      //       props.dispatch(changeListInput(e.target.value))
      //     }}/>
      //     <button className='ui secondary button' type='submit' id={props.list ? props.list.id : 0}>Submit</button>
      // </form>
      <div>
      PackListForm
      </div>
    )
  }

const mapStateToProps = (state) => {
  return {
    lists: state.listFormInput
  }
}


export default connect(mapStateToProps)(PackListForm)
