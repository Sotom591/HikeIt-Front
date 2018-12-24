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
        <Link className="item" to='/trails'> My Hikes </Link>
        <Link className="item" to='/packinglists'> Pack It </Link>
        <Link className="item" to='/profile'> Profile </Link>
      </div>

    )
  }
}
