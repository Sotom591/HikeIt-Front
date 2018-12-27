import React from 'react'
import TrailsCard from '../components/TrailsCard'

const TrailsCardContainer = (props) =>{
  return(
    <div id="trails-card-container">
      {props.trails.map(trail => < TrailsCard key={trail.id} trail={trail} handleSelectedTrail={props.handleSelectedTrail}/>)}
    </div>
  )
}
export default TrailsCardContainer
