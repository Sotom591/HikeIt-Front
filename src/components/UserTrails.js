import React, { Component } from 'react'
import { Link } from 'react-router-dom'


export default class UserTrails extends Component {


render(){
    return(
      <div className='user-trails'>
      <h3> Explore It Again </h3>
        <div id="trails-card-container">
          {this.props.trail ?
          <Link to={`/trails/${this.props.trail.id}`} className='trail-link'>
          <div className="ui card" id={this.props.trail.id} onClick={this.props.handleSelectedUserTrail}>
          <div className="image">
          <img alt={this.props.trail.name} src={this.props.trail.imgSmall} />
          </div>
          <div className="content">
          <div className="header">{this.props.trail.name}</div>
          <div className="meta">
          </div>
          </div>
          </div>
          </Link>
        : null}
        </div>

      </div>
    )
  }
}
// <Link to={`/trails/${this.props.trail.API_id}`}>

// {this.state.userTrails ?
// <div className="ui card">
// <div className="image">
// <img alt={this.state.userTrails.name} src={this.state.userTrails.imgSmall} />
// </div>
// <div className="content">
// <div className="header">{this.state.userTrails.name}</div>
// <div className="meta">
// </div>
// </div>
// </div>
// : null}


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


// componentDidMount(){
//   this.props.currentUser ? console.log(this.props.currentUser.id) :
//   console.log("null")
//   // fetch(`http://localhost:3000/users`)
//   //   .then(res => res.json())
//   //   .then(data => console.log(data[0]))
// }
