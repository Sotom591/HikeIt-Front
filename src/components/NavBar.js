import React, { Component } from 'react'

export default class NavBar extends Component {

render(){
    return(
      <div className="ui menu" id="nav-bar">
        <div className="header item">
          Home
        </div>
        <a className="item">
          My Hikes
        </a>
        <a className="item">
          Pack It
        </a>
        <a className="item">
          Profile
        </a>
      </div>

    )
  }
}
