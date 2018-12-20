import React, { Component } from 'react'

export default class SearchBar extends Component {

state = {
  searchTerm: ""
}

handleSearch = (e) =>{
  this.setState({
    searchTerm: e.target.value
  })
}

render(){
    return(
      <div>
        <div id="search-bar">
          Start Exploring...
          <br></br>
           <input type="text" onChange={this.handleSearch}></input> <button>Go!</button>
        </div>
      </div>
    )
  }
}
