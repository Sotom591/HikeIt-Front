import React from 'react'

const PackListForm = (props) => {
    return(
      <form onSubmit={props.onFormSubmit} id={props.list ? props.list.id : 0}>
          <input type="text" onChange={props.onListFormChange}/>
          <input type="submit" id={props.list ? props.list.id : 0} />
      </form>
    )
  }

export default PackListForm
