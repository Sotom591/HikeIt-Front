import React, { Component } from 'react'
import PackListForm from './PackListForm'

export default class PackList extends Component {


render(){
  console.log(this.props)
    return(
      <div>
        <h3>
          {this.props.list ? this.props.list.title : null}
        </h3>
        <div className="ui bulleted list">
          {this.props.items ?
            this.props.items.map(item =>
            <div className="item">{item.name} </div>
          ) : null
        }
        </div>
        < PackListForm onListFormChange={this.props.onListFormChange} onFormSubmit={this.props.onFormSubmit}/>
      </div>
    )
  }
}
