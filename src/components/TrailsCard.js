import React, { Component } from 'react'

export default class TrailsCard extends Component {

render(){
    return(
      <div className="ui card" id="trails-card">
      <a className="image" href="#">
      <img src={this.props.trail.imgSmall} />
      </a>
      <div className="content">
      <a className="header" href="#">{this.props.trail.name}</a>
      <div className="meta">
      </div>
      </div>
      </div>
    )
  }
}
