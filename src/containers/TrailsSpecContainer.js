import React from 'react'
import TrailsSpecCard from '../components/TrailsSpecCard'

const TrailsSpecContainer = (props) =>{

  return(
    <div>
      < TrailsSpecCard trail={props.trail} userTrail={props.userTrail} />
    </div>
  )
}
export default TrailsSpecContainer
