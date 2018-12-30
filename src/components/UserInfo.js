import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'


export default class UserInfo extends Component {

render(){
    return(
      <div>
        { this.props.currentUser ?
          <div className="user-info">
          <div className="ui centered card">
            <div className="image">
            {this.props.currentUser.avatar !== null ? <img src={this.props.currentUser.avatar} /> : <img src="https://avatars3.githubusercontent.com/u/40308424?s=400&v=4" />}
            </div>
          </div>
          </div>
          : null }

      </div>
    )
  }
}
  // <img alt="user avatar" src={this.props.currentUser.avatar}/>
      // : < Redirect to='/'/> }
