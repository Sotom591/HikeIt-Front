import React from 'react'
import TrailsCardContainer from './TrailsCardContainer'
import SortByBar from '../components/SortByBar'

const TrailsContainer = (props) =>{
  return(
    <div className="trails-container">
     <h3> Explore </h3>
      < SortByBar handleChange={props.handleChange}/>
      < TrailsCardContainer trails={props.trails} />
    </div>
  )
}
export default TrailsContainer
