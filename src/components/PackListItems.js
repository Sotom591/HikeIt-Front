import React, { Component } from 'react'


export default class PackListItems extends Component {

 state = {
   packed: this.props.item.packed
 }

  handleCheckBox = () => {

    // console.log(this.props.item.id)
    this.setState({
      packed: !this.state.packed
    })
    this.props.packChange(this.props.item.id, !this.state.packed)
  }

  render(){
      return(
        <div>
          {this.props.item ?
          <div className="item">
            <button onClick={() => {this.props.removeItem(this.props.item.id)}}>x</button>{this.props.item.name}
            <input type="checkbox" checked={this.state.packed} onChange={this.handleCheckBox}/>
          </div>
          : null}
        </div>
      )
    }
}
