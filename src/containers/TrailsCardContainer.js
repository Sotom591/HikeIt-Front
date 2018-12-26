import React from 'react'
import TrailsCard from '../components/TrailsCard'

const TrailsCardContainer = (props) =>{
  return(
    <div id="trails-card-container">
      {props.trails.map(trail => < TrailsCard key={trail.id} trail={trail}/>)}
    </div>
  )
}
export default TrailsCardContainer
