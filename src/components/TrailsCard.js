import React, { Component } from 'react'
import {Link} from 'react-router-dom'
export default class TrailsCard extends Component {

  render(){
      return(
        <Link to={`/trails/${this.props.trail.id}`}>
        <div className="ui card" id={this.props.trail.id} onClick={this.props.handleSelectedTrail}>
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
      )
    }
  }
