import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class NavBar extends Component {
logout = () => {
    this.props.setCurrentUser(null)
    localStorage.clear()
  }

render(){

    return(
      <div className="ui inverted menu" id="nav-bar">
        <div className="header item">
          HikeIt!
        </div>
        <Link className="item" to='/'>Home</Link>

        {this.props.currentUser === null ? null :
          <>

        <Link className="item" to='/myhikes'> My Hikes </Link>
        <Link className="item" to='/lists'> Pack It </Link>
        <Link className="item" to='/trails'> Explore </Link>
        <Link className="item" to='/profile'> {this.props.currentUser.username} </Link>

        <Link className="item" id="logout" to='/' onClick={this.logout}>
        <i className="tree icon"></i>Logout</Link>


        </>
      }
      </div>

    )
  }
}
