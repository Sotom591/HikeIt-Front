import React, { Component } from 'react'

export default class NavBar extends Component {

render(){
    return(
      <div className="ui menu" id="nav-bar">
        <div className="header item">
          HikeIt!
        </div>
        <a href="http://localhost:3001/" className="item">
          Home
        </a>
        <a href="http://localhost:3001/trails" className="item">
          My Hikes
        </a>
        <a href="http://localhost:3001/packinglists" className="item">
          Pack It
        </a>
        <a href="http://localhost:3001/profile" className="item">
          Profile
        </a>
      </div>

    )
  }
}
