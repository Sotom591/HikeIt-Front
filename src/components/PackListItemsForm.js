import React from 'react'
import { connect } from 'react-redux'
import { changeItemInput } from '../actions'

const PackListItemsForm = (props) => {
    return(
      <form className='pack-items-form' onSubmit={props.onItemsFormSubmit} id={props.list ? props.list.id : 0}>
          <input className='pack-input' type='text' value={props.items.itemsFormInput} onChange={(e) => {
            props.dispatch(changeItemInput(e.target.value))
          }}/>
          <button className='ui secondary button' type='submit' id={props.list ? props.list.id : 0}>Submit</button>
      </form>

    )
  }

const mapStateToProps = (state) => {
  return {
    items: state.items
  }
}


export default connect(mapStateToProps)(PackListItemsForm)
