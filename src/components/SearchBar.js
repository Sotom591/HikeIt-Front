import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class SearchBar extends Component {

state = {
  searchTerm: "",
  toTrails: false
}

handleSearch = (e) =>{
  this.setState({
    searchTerm: e.target.value
  })
}

render(){
    return(
      <div>

           <Link to={"/trails"}>
            <div id="search-bar">
            Start Exploring...
            </div>
           </Link>

      </div>
    )
  }
}
// Start Exploring...
// <br></br>
// <input type="text" onChange={this.handleSearch}></input>
