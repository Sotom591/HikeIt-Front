import React, { Component } from 'react'
// import Select from 'react-select'

export default class SortByBar extends Component {



  render(){
      return(
        <div>
        <select className="ui selection dropdown"
          onChange={this.props.handleSort}>
          <option value="">Sort By </option>
          <option value="name">Name</option>
          <option value="stars">Popularity</option>
          <option value="length">Length</option>
        </select>
        </div>
      )
    }
  }
