import React, { Component } from 'react'

export default class Login extends Component {

  state = {
    username: "",
    password: ""
  }

  handleLogin = (e) =>{
    let targetName = e.target.name
    let targetValue = e.target.value

    this.setState({
      [targetName]: targetValue
    })
  }

  render(){
      return(

        <div className="ui menu" id="login-bar">
          <div className="header item">
            Login
          </div>
          <div className="item">
            Username: <input type="text" name="username" onChange={this.handleLogin}></input>
          </div>
          <div className="item">
            Password: <input type="text" name="password" onChange={this.handleLogin}></input>
          </div>
          <div className="item">
            <input type="submit"></input>
          </div>
        </div>
      )
    }
  }
