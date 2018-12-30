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

  handleLoginSubmit = (e) => {
    e.preventDefault()
    fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password
      })
    })
    .then(res => res.json())
    .then(data => {
      if(data.error){
        alert("Incorrect username and/or password")
      } else {
        this.props.setCurrentUser(data.user_info)
        localStorage.setItem('token', data.token)
      }
    })
  }

  render(){
      return(

        <form className="ui menu" id="login-bar" onSubmit={(e) => this.handleLoginSubmit(e)}>
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
            <button type="submit">Login</button>
          </div>
        </form>
      )
    }
  }
