import React from 'react'
import SearchBar from '../components/Login'
import ExploreContainer from './ExploreContainer'

const HomeContainer = () =>{

  return(
    <div className="home-container">
      < SearchBar />
      < ExploreContainer />
    </div>
  )
}
export default HomeContainer
