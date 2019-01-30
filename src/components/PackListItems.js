import React, { Component } from 'react'


export default class PackListItems extends Component {
 state = {
   packed: this.props.item.packed
 }

  handleCheckBox = () => {
    this.setState({
      packed: !this.state.packed
    })
    this.props.packChange(this.props.item.id, !this.state.packed)
  }

  render(){
    return(
      <div className='pack-items'>
      <br/>
        {this.props.item ?
        <p className='item'>

          {this.props.item.name + " "}

          <input className="ui checkbox" type="checkbox" checked={this.state.packed} onChange={this.handleCheckBox}/>
          <button className='ui compact icon button' onClick={() => {this.props.removeItem(this.props.item.id)}}><i className="times icon"></i></button>

        </p>
        : null}
      </div>
    )
  }
}
