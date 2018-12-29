import React, { Component } from 'react'

export default class TrailsSpecCard extends Component {

render(){
    return(
      <div>
      {this.props.trail ?
          <div>
          <h3>{this.props.trail.name}</h3>
          <img src={this.props.trail.imgMedium}/>
          <button>Hike This!</button>
          <button>Add to Favs</button>
          </div>
        : null}

      </div>
    )
  }
}
