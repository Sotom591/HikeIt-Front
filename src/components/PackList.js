import React, { Component } from 'react'

export default class PackList extends Component {

render(){
  console.log(this.props)
    return(
      <div>
        <h3>
          {this.props.list ? this.props.list.title : null}
        </h3>
          {this.props.items ?
            this.props.items.map(item =>
            <div>{item.name} </div>
          ) : null
        }
      </div>
    )
  }
}

// {this.props.lists.map(list =>
//
//   <div> {list.title} </div>
//
// )}
