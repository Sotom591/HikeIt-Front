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
      <div id="search-bar">

           <Link to={"/trails"}>
            <h3>Start Exploring...</h3>
           </Link>

      </div>
    )
  }
}
