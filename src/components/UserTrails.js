import React, { Component } from 'react'


export default class UserTrails extends Component {
state = {
  userTrails: []
}


getUserHikes = () => {
  if(this.props.currentUser){
    let userId = this.props.currentUser.id
      fetch(`http://localhost:3000/users/${userId}`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          userTrails: data.hiking_lists
        })
      }, console.log("fetched"))
  } else {
    console.log("loading")
  }
}

render(){
    return(
      <div>

      </div>
    )
  }
}
