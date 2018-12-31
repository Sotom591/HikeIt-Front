import React, { Component } from 'react'
import PackListForm from '../components/PackListForm'
import PackListItems from '../components/PackListItems'

export default class PackListItemsContainer extends Component {


  render(){

      return(
        <div>
          <h3>
            {this.props.list ? this.props.list.title : null}
          </h3>
          {this.props.items.map(item=> < PackListItems key={item.id} item={item} removeItem={this.props.removeItem} packChange={this.props.packChange} />)}
          < PackListForm onListFormChange={this.props.onListFormChange} onFormSubmit={this.props.onFormSubmit} list={this.props.list}/>
        </div>
      )
    }
}
// <div className="ui bulleted list">
//   {this.props.items ?
//     this.props.items.map(item =>
//     <div className="item"> <button onClick={() => {this.props.removeItem(item.id)}}>x</button>{item.name}
//     <input type="checkbox"  onChange={this.props.packChange}/>
//     </div>
//   ) : null
// }
// </div>
