import React, { Component } from 'react'
import PackListItemsForm from '../components/PackListItemsForm'
import PackListItems from '../components/PackListItems'

export default class PackListItemsContainer extends Component {

  render(){
      return(
        <div className='pack-items-container'>
          <h3 id='list-title'>
            {this.props.list ? this.props.list.title : null}
          </h3>
          {this.props.items.map(item=> < PackListItems key={item.id} item={item} removeItem={this.props.removeItem} packChange={this.props.packChange} />)}
          <PackListItemsForm onListFormChange={this.props.onListFormChange} onFormSubmit={this.props.onFormSubmit} list={this.props.list}/>
        </div>
      )
    }
}
