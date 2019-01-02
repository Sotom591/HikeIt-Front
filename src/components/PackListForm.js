import React from 'react'

const PackListForm = (props) => {
    return(
      <form className='pack-form' onSubmit={props.onFormSubmit} id={props.list ? props.list.id : 0}>
          <input className='pack-input' type='text' onChange={props.onListFormChange}/>
          <button className='ui secondary button' type='submit' id={props.list ? props.list.id : 0}>Submit</button>
      </form>
    )
  }

export default PackListForm
