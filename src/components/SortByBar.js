import React, { Component } from 'react'
// import Select from 'react-select'

export default class SortByBar extends Component {



  render(){
      return(
        <div>
        <select className="ui selection dropdown"
          onChange={this.props.handleChange}>
          <option value="">Sort By </option>
          <option value="alphabetically">Alphabetically</option>
          <option value="difficulty">Difficulty</option>
          <option value="length">Length</option>
        </select>
        </div>
      )
    }
  }
