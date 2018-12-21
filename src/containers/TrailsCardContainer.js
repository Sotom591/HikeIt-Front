import React from 'react'
import TrailsCard from '../components/TrailsCard'

const TrailsCardContainer = (props) =>{
  console.log(props.trails)
  return(
    <div>
      {props.trails.map(trail => < TrailsCard key={trail.id} trail={trail}/>)}
    </div>
  )
}
export default TrailsCardContainer
