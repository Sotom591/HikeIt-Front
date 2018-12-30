import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class NavBar extends Component {
logout = () => {
    this.props.setCurrentUser(null)
    localStorage.clear()
  }

render(){

    return(
      <div className="ui menu" id="nav-bar">
        <div className="header item">
          HikeIt!
        </div>
        <Link className="item" to='/'>Home</Link>

        {this.props.currentUser === null ? null :
          <>

        <Link className="item" to='/trails'> My Hikes </Link>
        <Link className="item" to='/packinglists'> Pack It </Link>
        <Link className="item" to='/profile'> {this.props.currentUser.username} </Link>
        <Link className="item" id="logout" to='/' onClick={this.logout}>Logout</Link>


        </>
      }
      </div>

    )
  }
}
