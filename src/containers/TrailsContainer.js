import React, { Component } from 'react'
import TrailsCardContainer from './TrailsCardContainer'
import SortByBar from '../components/SortByBar'

class TrailsContainer extends Component {

  state = {
    sortedTrails: "none"
  }

  handleSort = (e) =>{
    let sortBy = e.target.value
    if(sortBy === "name"){
      this.setState({
        sortedTrails: "name"
      })
    } else if(sortBy === "stars"){
      this.setState({
        sortedTrails: "stars"
      })
    } else if(sortBy === "length"){
      this.setState({
        sortedTrails: "length"
      })
    }
     else {
      this.setState({
        sortedTrails: "none"
      })
    }
  }

  sortTrailsBy = () => {
    if(this.state.sortedTrails !== "none"){
      return this.props.trails.sort((a, b) => {
        if(this.state.sortedTrails === "name"){
        return a.name.localeCompare(b.name)
      } else if(this.state.sortedTrails === "stars"){
        return a.stars - b.stars
      } else {
        return a.length - b.length
      }
      })
    } else {
       return this.props.trails
    }
  }
  render(){
    return(
      <div className="trails-container">
       <h3> Explore </h3>
        < SortByBar handleSort={this.handleSort}/>
        < TrailsCardContainer trails={this.sortTrailsBy()} handleSelectedTrail={this.props.handleSelectedTrail} />
      </div>
    )
  }

}


export default TrailsContainer
