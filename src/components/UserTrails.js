import React, { Component } from 'react'


export default class UserTrails extends Component {
state = {
  userTrails: []
}


// getUserHikes = () => {
//   if(this.props.currentUser !== null){
//     let userId = this.props.currentUser.id
//       fetch(`http://localhost:3000/users/${userId}`)
//       .then(res => res.json())
//       .then(data => {
//         this.setState({
//           userTrails: data.hiking_lists
//         })
//       }, console.log("fetched"))
//   } else {
//     console.log("loading")
//   }
// }
componentDidMount(){
  this.props.currentUser ? console.log(this.props.currentUser.id) :
  console.log("null")
  // fetch(`http://localhost:3000/users`)
  //   .then(res => res.json())
  //   .then(data => console.log(data[0]))
}

render(){
    return(
      <div>
    
      </div>
    )
  }
}
