import React, { Component } from 'react'
import Select from 'react-select'

export default class SortByBar extends Component {


  render(){
    const sortOptions = [
    { value: 'Alphabetically', label: 'Alphabetically' },
    { value: 'Difficulty', label: 'Difficulty' },
    { value: 'Trail Length', label: 'Trail Length' }
      ]
      return(
          <div className="sortBy">
            <Select options={sortOptions} />
          </div>
      )
    }
  }
