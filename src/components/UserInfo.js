import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'


export default class UserInfo extends Component {

render(){
    return(
      <div>
        {this.props.currentUser ? this.props.currentUser.firstName :
        < Redirect to='/'/>}
      </div>
    )
  }
}
