import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class NavBar extends Component {

render(){
    return(
      <div className="ui menu" id="nav-bar">
        <div className="header item">
          HikeIt!
        </div>
        <Link className="item" to='/'>Home</Link>
        <Link className="item" to='/trails'> Trails </Link>
        <Link className="item" to='/packinglists'> Pack it </Link>
        <Link className="item" to='/profile'> Profile </Link>
      </div>

    )
  }
}
