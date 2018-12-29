import React from 'react'
import TrailsSpecCard from '../components/TrailsSpecCard'

const TrailsSpecContainer = (props) =>{
  return(
    <div>
      < TrailsSpecCard trail={props.trail} />
    </div>
  )
}
export default TrailsSpecContainer
