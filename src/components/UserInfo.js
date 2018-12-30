import React, { Component } from 'react'
// import { Redirect } from 'react-router-dom'


export default class UserInfo extends Component {

render(){
    return(
      <div>
        { this.props.currentUser ?
          <div className="user-info">
          <h3>{this.props.currentUser.username}</h3>
          <div className="ui centered card">
            <div className="image">
            {this.props.currentUser.avatar !== null ? <img alt="avatar" src={this.props.currentUser.avatar} /> : <img alt="default avatar" src="https://avatars3.githubusercontent.com/u/40308424?s=400&v=4" />}
            </div>
          </div>
          <div>
            <h3>Name: {this.props.currentUser.firstName + " " + this.props.currentUser.lastName} </h3>
            <h3>My Hikes: </h3>
            <h3>My Packing Lists: </h3>
          </div>
          </div>
          : null }

      </div>
    )
  }
}
  // <img alt="user avatar" src={this.props.currentUser.avatar}/>
      // : < Redirect to='/'/> }
