import React from 'react'

const PackListForm = (props) => {
    return(
      <form onSubmit={props.onFormSubmit}>
          <input type="text" onChange={props.onListFormChange}/>
          <input type="submit" />
      </form>
    )
  }

export default PackListForm
