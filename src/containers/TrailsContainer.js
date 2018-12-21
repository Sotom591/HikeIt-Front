import React from 'react'
import TrailsCardContainer from './TrailsCardContainer'
// import SortByBar from '../components/SortByBar'

const TrailsContainer = (props) =>{
  return(

    < TrailsCardContainer trails={props.trails} />
  )
}
export default TrailsContainer
